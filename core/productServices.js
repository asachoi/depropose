mainApp.service('productServices', function ($http, $rootScope, $filter, $q) {
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
        return $http.get("customizations/data/oldproduct.txt?cb=erwrqew");
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