 var app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope) {
    $scope.nav = {
      "title": "Math 1830",
      "titleUrl": "https://psccmath.github.io/math1830/",
      "unit": [
        {
          "title": "Unit 1",
          "nav": [
            {
              "urlText": "1.1 Finding Limits Graphically",
              "url": "u1s1.html"
            },
            {
              "urlText": "1.2 Finding Limits Algebraically/Infinite Limits/Continuity",
              "url": "u1s2.html"
            },
            {
              "urlText": "1.3 Definition of Derivatives",
              "url": "u1s3.html"
            },
            {
              "urlText": "1.4 Derivatives: The Power Rule",
              "url": "u1s4.html"
            }
                   
          ]
        },
        {
          "title": "Unit 2",
          "nav": [
            {
              "urlText": "2.1 Marginal Analysis in Business and Economics",
              "url": "u2s1.html"
            },

            {
              "urlText": "2.2 The First Derivative Test",
              "url": "u2s2.html"
            },
          
            {
              "urlText": "2.3 The Second Derivative Test",
              "url": "u2s3.html"
            },
            {
              "urlText": "2.4 Graph Analysis: Polynomials",
              "url": "u2s4.html"
            },
            
            {
              "urlText": "2.5 Absolute Extrema",
              "url": "u2s5.html"
            },
            {
              "urlText": "2.6 Introduction to Optimization",
              "url": "u2s6.html"
            },
            {
              "urlText": "2.7 Optimization in Packaging: Cans",
              "url": "u2s7.html"
            },
            {
              "urlText": "2.8 Optimization in Packaging: Boxes",
              "url": "u2s8.html"
            }
          ]
        },
        {
          "title": "Unit 3",
          "nav": [
                       
            {
              "urlText": "3.1 Exponential and Logarithmic Function Applications",
              "url": "u3s1.html"
            },
            {
              "urlText": "3.2 Derivatives of Exponential and Logarithmic Functions",
              "url": "u3s2.html"
            },
                     {
              "urlText": "3.3 Derivatives of Products",
              "url": "u3s3.html"
            },
            {
              "urlText": "3.4 Derivatives of Quotients",
              "url": "u3s4.html"
            },
            {
              "urlText": "3.5 The Chain Rule",
              "url": "u3s5.html"
            },
            {
              "urlText": "3.6 Graph Analysis: Rational Functions",
              "url": "u3s6.html"
            }
           
          ]
        },
        {
          "title": "Unit 4",
          "nav": [
            {
              "urlText": "4.1 Area by Sums",
              "url": "u4s1.html"
            },
            {
              "urlText": "4.2 The Fundamental Theorem of Calculus",
              "url": "u4s2.html"
            },
            {
              "urlText": "4.3 Indefinite Integrals",
              "url": "u4s3.html"
            },
            {
              "urlText": "4.4 Integration by Substitution",
              "url": "u4s4.html"
            },
            {
              "urlText": "4.5 The Area Between Curves",
              "url": "u4s5.html"
            }
          ]
        }
      ]
    }
  });