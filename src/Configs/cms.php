  <?php

return [
    'timezone' => 'Asia/Taipei',

    'item' => [
        'front' => [
            'year_month_filter' => 0,
            'creator_group_filter'    => [
                'enabled'           => 0,
                'groups'        => []
            ],
        ]
    ],
    'form' => [
        'email' => [
            'template' => [
                'admin' => 'default',
                'user'  => 'default'
            ],

            'admins' => [
                'technique@daydream-lab.com'
            ]
        ]
    ]
];