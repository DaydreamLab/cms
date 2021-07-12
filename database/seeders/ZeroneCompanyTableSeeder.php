<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\User\Models\Company\Company;
use Illuminate\Database\Seeder;

class ZeroneCompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # 建立廠商分類
        $data = getJson(__DIR__ . '/jsons/zerone-company-category.json', true);
        $this->migrate($data, null);

        # 建立廠商
        $companyCategories = Category::where('extension', 'company')->whereNotNull('parent_id')->get();
        $data = getJson(__DIR__ . '/jsons/zerone-company.json', true);
        foreach ($data as $companyInput) {
            $companyData = [
                'name'      => $companyInput['CompName'],
                'vat'       => $companyInput['CompNo'],
                'domain'    => $companyInput['Domain'],
                'created_by'=> 1,
            ];

            if ($companyData['vat'] == 'NULL') {
                $companyData['vat'] = null;
            }

            if ($companyInput['type'] == '0') {
                $companyData['category_id'] = $companyCategories->where('title', '競爭廠商')->first()->id;
            } elseif ($companyInput['type'] == '1') {
                $companyData['category_id'] = $companyCategories->where('title', '經銷會員')->first()->id;
            } elseif ($companyInput['type'] == '3') {
                $companyData['category_id'] = $companyCategories->where('title', '原廠')->first()->id;
            } else {
                $companyData['category_id'] = $companyCategories->where('title', '零壹員工')->first()->id;
            }

            $company = Company::create($companyData);
        }
    }



    public function migrate($data, $parentNode)
    {
        foreach ($data as $inputItem)
        {
            $children = $inputItem['children'];
            unset($inputItem['children']);

            $category = Category::create($inputItem);

            if ($parentNode) {
                $parentNode->appendNode($category);
            }

            if (count($children)) {
                self::migrate($children, $category);
            }
        }
    }
}
