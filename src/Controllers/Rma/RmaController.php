<?php

namespace DaydreamLab\Cms\Controllers\Rma;

use DaydreamLab\Cms\Requests\Rma\RmaSearchPost;
use Illuminate\Routing\Controller;
use SoapClient;
use Throwable;

class RmaController extends Controller
{

    public function search(RmaSearchPost $request)
    {
        $input = $request->validated();
        $client = new SoapClient("http://webservice.zerone.com.tw/RMA/rmaWebservice.asmx?WSDL");

        $params = array(
            'srmano' => $input->get('id') ? : '',
            'semail' => $input->get('email') ? : '',
            'scode' => $input->get('phoneCode') ? : '',
            'stel' => $input->get('phoneNumber') ? : '',
            'sext' => $input->get('phoneExtension') ? : ''
        );

        $res = $client->__soapCall('checkProcess', ['parameters' => $params]);
        if ($res->checkProcessResult != '查無資料') {
            $repairList = explode(',', $res->checkProcessResult);
            foreach ($repairList as $repair) {
                $p = explode(';', $repair);
                print_r('編號：'.$p[0].'日期：'.$p[1]."\n");
                $detail = $client->__soapCall('checkDetail', ['parameters' => ['srmano' => $p[0]]]);
                print_r($detail->checkDetailResult."\n");
            }
        }
        /*
        $slice = explode(',', $res->checkProcessResult);
        $qno = explode(';', $slice[1])[0];

        $detail_array = explode('@#', $detail->checkDetailResult);
     */
    }

}
