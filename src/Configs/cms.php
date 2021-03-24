  <?php

return [
    'item' => [
        'front' => [
            'year_month_filter' => 0,
            'creator_group_filter'    => [
                'enabled'           => 0,
                'groups'        => []
            ],
            'access_ids' => [1],
            'viewlevels' => [2],
        ],
        'use_word_segmentation' => 0,
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
