mainApp.service('productServices', function ($http, $rootScope, $filter) {
    this.getProductGroupList = function () {
        return $rootScope.settingObj.products;
    }

    this.getProductGroup = function (productgroupid) {
        // alert($rootScope.settingObj.products);
        return $filter('filter')($rootScope.settingObj.products, { productid: productgroupid })[0];
    }


    this.getProduct = function (productgroupid, planid) {
        if (planid == null) return;
        var productgroup = this.getProductGroup(productgroupid);
        var productid = planid.split('.')[0];

        return $filter('filter')(productgroup.plantypes, { plantype: productid })[0];
    }

    this.getProductName = function (productgroupid) {

    }

    this.getPlanName = function (productgroupid) {

    }

    this.getPlansByProduct = function (productgroupid) {
        var p = this.getProductGroup(productgroupid);
        if (p == null) return;

        var plans = [];
        for (i = 0; i < p.plantypes.length; i++) {

            var pt = p.plantypes[i];

            for (j = 0; j < pt.plans.length; j++) {
                var ptt = pt.plans[j];
                ptt.plantype = pt.plantype;
                plans = plans.concat(ptt);
            }
        }

        return plans;
    }
    this.getPlan = function (productgroupid, planid) {
        if (planid == null) return;
        var product = this.getProduct(productgroupid, planid);
        var pid = planid.split('.')[1];

        return $filter('filter')(product.plans, { planid: pid })[0];
    }


    this.loadProducts = function () {
        var url = '/data/setting.txt';
        $http.get(url).then(
            function (resp) {

            }
        );

        var productMaster =
            {
                products: [
                    {
                        productid: 'Enrich',
                        productname: 'OLD MCBL',
                        plantypes: [
                            {
                                plantype: 'RPUL', //regular pay unilink
                                planname: 'Regular Pay',
                                customform: 'RPUL',
                                plans: [
                                    {
                                        planid: 'UL111',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 1 Face Plus) 15x-49x (Peso) Band 1',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL112',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 1 Face Plus) 50x-99x (Peso) Band 1',
                                        currency: 'PHP',
                                        famultipliermin: 50,
                                        famultipliermax: 99,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL113',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 2 Level Face) 15x-49x (Peso) Band 1',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Level Face',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL121',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 2 Level Face) 50x-99x (Peso) Band 1',
                                        currency: 'USD',
                                        famultipliermin: 50,
                                        famultipliermax: 99,
                                        deathbenefit: 'Level Face',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL122',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 1 Face Plus) 15x-49x (Peso) Band 2',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL123',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 1 Face Plus) 50x-99x (Peso) Band 2',
                                        currency: 'PHP',
                                        famultipliermin: 50,
                                        famultipliermax: 99,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL211',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 2 Level Face) 15x-49x (Peso) Band 2',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Level Face',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL212',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 2 Level Face) 50x-99x (Peso) Band 2',
                                        currency: 'PHP',
                                        famultipliermin: 50,
                                        famultipliermax: 99,
                                        deathbenefit: 'Level Face',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL213',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 1 Face Plus) 15x-49x (Dollar) Band 1',
                                        currency: 'USD',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL221',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 1 Face Plus) 50x-99x (Dollar) Band 1',
                                        currency: 'USD',
                                        famultipliermin: 50,
                                        famultipliermax: 99,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL222',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 2 Level Face) 15x-49x (Dollar) Band 1',
                                        currency: 'USD',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL223',
                                        planname: 'Old MCBL Enrich Regular Pay (DB Option 2 Level Face) 50x-99x (Dollar) Band 1',
                                        currency: 'USD',
                                        famultipliermin: 50,
                                        famultipliermax: 99,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    }
                                ],
                            },
                            {
                                plantype: 'LPUL',//limited pay unilink

                                plans: [
                                    {
                                        planid: 'UM111',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                        planname: 'Old MCBL Enrich Minimum 5-Pay (DB Option 1 Face Plus) 5x-20x (Peso)',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                    },
                                    {
                                        planid: 'UM112'
                                        , planname: 'Old MCBL Enrich Minimum 5-Pay (DB Option 2 Level Face) 5x-20x (Peso)',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],

                                    },
                                    {
                                        planid: 'UM113', planname: 'Old MCBL Enrich Minimum 10-Pay (DB Option 1 Face Plus) 5x-25x (Peso)',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UM121', planname: 'Old MCBL Enrich Minimum 10-Pay (DB Option 2Level Face) 5x-25x (Peso)',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UM122', planname: 'Old MCBL Enrich Minimum 5-Pay (DB Option 1 Face Plus) 5x-20x (Dollar)',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UM123', planname: 'Old MCBL Enrich Minimum 5-Pay (DB Option 2 Level Face) 5x-20x (Dollar)',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UM211', planname: 'Old MCBL Enrich Minimum 10-Pay (DB Option 1 Face Plus) 5x-25x (Dollar)',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UM212', planname: 'Old MCBL Enrich Minimum 10-Pay (DB Option 2 Level Face) 5x-25x (Dollar)',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'Face Plus',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    }
                                ],
                            },


                        ]
                    },
                    {
                        productid: 'SH',
                        amounttype: 'premiumdriven',
                        plantypes: [
                            {
                                plantype: '',
                                plans: [
                                    { planid: 'HI100' }
                                ]
                            }
                        ]
                    }
                ],
                riders: [
                    {
                        riderid: 'TDW',
                    },
                    { riderid: 'ADB' },
                    { riderid: 'HIB65' },
                    { riderid: 'TL' },
                    { riderid: 'MDB85' },
                    { riderid: 'FIB' },
                    { riderid: 'OPT' },
                    { riderid: 'DDD' }
                ],
                product_rider: [
                    {
                        productid: 'SH',
                        riders: [
                            {
                                riderid: 'OPT',
                                holderagemin: 18,
                                holderagemax: 55,
                                insureragemin: null,
                                insureragemax: null
                            },
                            {
                                riderid: 'DDD',
                                holderagemin: 18,
                                holderagemax: 55,
                                insureragemin: null,
                                insureragemax: null
                            }
                        ],
                        plan_riders: [
                            {
                                planid: 'HI100',
                                riders: [
                                    'OPT', 'DDD'
                                ]
                            },
                        ]
                    },
                    {
                        plan_riders: [
                            {
                                planid: 'ADM01',
                                riders: [
                                    'TDW', 'ADB', 'HIB65', 'MDB85'
                                ]
                            },
                            {
                                planid: 'ADM02',
                                riders: [
                                    'TDW', 'ADB', 'HIB65', 'MDB85', 'FIB'
                                ]
                            },
                            {
                                planid: 'ADM03',
                                riders: [
                                    'TDW', 'ADB', 'HIB65', 'MDB85', 'TL'
                                ]
                            }
                        ]
                    }
                ]
            };
        return productMaster;
    };

    this.loadInitState = function () {
        var data = {
            settings: {
                isSamePerson: true
            },
            customers:
            {
                insured:
                {
                    guid: guid(),
                    source: 'PE',
                    role: 'insurer',
                    smoking: 'S',
                    surname: 'Asa'
                },
                policyholder:
                {
                    role: 'policyholder',
                    smoking: 'S',
                    firstname: '',
                    surname: ''

                }
            },
            product: {
            }
            ,
            riders: [
            ]
        };
        return data;
    };


});