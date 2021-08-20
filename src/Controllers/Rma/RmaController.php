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
            $input->get('id'),
            $input->get('email'),
            $input->get('phoneCode'),
            $input->get('phoneNumber'),
            $input->get('phoneExtension')
        );

        $res = $client->__soapCall('checkProcess', $params);
        print_r($res->checkProcessResult);
    }

}
