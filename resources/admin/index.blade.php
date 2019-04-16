<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Daydream Lab</title>

    <style>
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #F7FAFC;
        }

        #loader {
            display: block;
            position: relative;
            left: 50%;
            top: 50%;
            width: 150px;
            height: 150px;
            margin: -75px 0 0 -75px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #3f6c95;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
        }

        #loader:before {
            content: "";
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #305373;
            -webkit-animation: spin 3s linear infinite;
            animation: spin 3s linear infinite;
        }

        #loader:after {
            content: "";
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #2f3855;
            -webkit-animation: spin 1.5s linear infinite;
            animation: spin 1.5s linear infinite;
        }

        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    </style>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.6.3/css/light.css" integrity="sha384-ouQ4uivIto2ZdBS6+torZMbImJhWA6/m7/CAGY9z0FNDmoAF6uWAEnavvIsR1EBt"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.6.3/css/fontawesome.css" integrity="sha384-toEUmnrGu+eq8XUD6ovsr/vFX+R3v9+FUGAnpef+uwGKMCeqZkcZfkXQ0Pls5WS7"
        crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{ asset(mix('/css/app.css', 'admin')) }}">
</head>

<body>
    <div id="preloader">
        <div id="loader"></div>
    </div>
    <div id="app"></div>

    <script>
        window.onload=function () {
                document.querySelector('#preloader').remove()
            }
    </script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js"></script>

    {{ @if (config('app.env') === 'production') }}
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    {{ @else }}
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    {{ @endif }}
    <script src="//unpkg.com/vue-i18n/dist/vue-i18n.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.2/vue-router.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.6/index.js"></script>
    <script type="text/javascript" src="{{ asset(mix('/js/editor.js', 'admin')) }}"></script>
    <script type="text/javascript" src="{{ asset(mix('/js/manifest.js', 'admin')) }}"></script>
    <script type="text/javascript" src="{{ asset(mix('/js/vendor.js', 'admin')) }}"></script>
    <script type="text/javascript" src="{{ asset(mix('/js/app.js', 'admin')) }}"></script>

</body>

</html>