  <?php

return [
    'public_viewlevel_id' => 1,

    'timezone' => 'Asia/Taipei',
    'item' => [
        'front' => [
            'year_month_filter' => 0,
            'creator_group_filter'    => [
                'enabled'           => 0,
                'groups'        => []
            ],
            'access_ids' => [1]
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
