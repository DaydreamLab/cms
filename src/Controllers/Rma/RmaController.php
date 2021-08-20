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
        print_r($res->checkProcessResult);
        /*
        $slice = explode(',', $res->checkProcessResult);
        $qno = explode(';', $slice[1])[0];
        $detail = $client->__soapCall('checkDetail', ['parameters' => ['srmano' => $qno]]);
        $detail_array = explode('@#', $detail->checkDetailResult);
     */
    }

}
