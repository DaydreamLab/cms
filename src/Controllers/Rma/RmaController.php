<?php

namespace DaydreamLab\Cms\Controllers\Rma;

use DaydreamLab\Cms\Requests\Rma\RmaAddPost;
use DaydreamLab\Cms\Requests\Rma\RmaSearchPost;
use DaydreamLab\JJAJ\Traits\ApiJsonResponse;
use Illuminate\Routing\Controller;
use SoapClient;
use Throwable;

class RmaController extends Controller
{
    use ApiJsonResponse;

    public function add(RmaAddPost $request)
    {
        $input = $request->validated();
        $client = new SoapClient("http://webservice.zerone.com.tw/RMA/rmaWebservice.asmx?WSDL");

        $params = array(
            "scompellation" => $input->get('companyName'),
            "sattribute"    => $input->get('customer'),
            "sname"         => $input->get('contactName'),
            "stelcode"      => $input->get('phoneCode'),
            "stel"          => $input->get('phoneNumber'),
            "stelext"       => $input->get('phoneExt') ? : '',
            "sfaxcode"      => $input->get('faxCode') ? : '',
            "sfax"          => $input->get('faxMobile') ? : '',
            "szip"          => $input->get('zipCode'),
            "saddress"      => $input->get('address'),
            "semail"        => $input->get('email'),
            "semail2"       => $input->get('backEmail') ? : '',
            "smemo"         => $input->get('otherInfo') ? : '',
            "sproductid"    => $input->get('brand'),
            "sproductmodel" => $input->get('productModel'),
            "smodelseirano" => $input->get('serialNumber'),
            "ssendway"      => $input->get('sendWay'),
            "sproductstateid" => $input->get('objectStatus'),
            "sfaultid"      => $input->get('faultId') ? : '',
            "sfaultaccount" => $input->get('description'),
            "sfaultmemo"    => $input->get('memo') ? : ''
        );

        try {
            $res = $client->__soapCall('insertDB', [$params]);
            print_r($res->insertDBResult);
        } catch (Throwable $e) {
            print_r($e);
        }
    }


    public function search(RmaSearchPost $request)
    {
        $input = $request->validated();
        $client = new SoapClient("http://webservice.zerone.com.tw/RMA/rmaWebservice.asmx?WSDL");

        $params = array(
            'srmano' => $input->get('number') ? : '',
            'semail' => $input->get('email') ? : '',
            'scode' => $input->get('phoneCode') ? : '',
            'stel' => $input->get('phoneNumber') ? : '',
            'sext' => $input->get('phoneExtension') ? : ''
        );

        $res = $client->__soapCall('checkProcess', ['parameters' => $params]);
        if ($res->checkProcessResult == '查無資料') {
            $response = [];
        } else {
            $repairList = explode(',', $res->checkProcessResult);
            unset($repairList[0]); # test;test
            $response = [];
            foreach ($repairList as $repair) {
                $p = explode(';', $repair);
                //print_r('編號：'.$p[0].'日期：'.$p[1]."\n");
                $detail = $client->__soapCall('checkDetail', ['parameters' => ['srmano' => $p[0]]]);
                //print_r($detail->checkDetailResult."\n");
                if (strpos($detail->checkDetailResult, '@#') !== false) {
                    $detailList = explode('@#', $detail->checkDetailResult);
                    $formedData = [];
                    foreach ($detailList as $key => $item) {
                        switch ($key) {
                            case 0:
                                $formedData['date'] = $item;
                                break;
                            case 1:
                                $formedData['number'] = $item;
                                break;
                            case 2:
                                $formedData['companyName'] = $item;
                                break;
                            case 3:
                                $formedData['contactName'] = $item;
                                break;
                            case 4:
                                $formedData['phoneNumber'] = $item;
                                break;
                            case 5:
                                $formedData['fax'] = $item;
                                break;
                            case 6:
                                $formedData['email'] = $item;
                                break;
                            case 7:
                                $formedData['address'] = $item;
                                break;
                            case 8:
                                $formedData['otherInfo'] = $item;
                                break;
                            case 9:
                                $formedData['brand'] = $item;
                                break;
                            case 10:
                                $formedData['productModel'] = $item;
                                break;
                            case 11:
                                $formedData['serialNumber'] = $item;
                                break;
                            case 12:
                                $formedData['sendWay'] = $item;
                                break;
                            case 13:
                                $formedData['objectStatus'] = $item;
                                break;
                            case 14:
                                $formedData['description'] = $item;
                                break;
                            case 15:
                                $formedData['memo'] = $item;
                                break;
                            default:
                                break;
                        }
                    }
                    $formedData['__originalResponse'] = $detail->checkDetailResult;
                    $response[] = $formedData;
                }
            }
        }

        return $this->response('GetListSuccess', $response);
    }

}
