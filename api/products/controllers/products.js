'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async review(ctx) {
       console.log('Review called')
       return {Name : 'Mohib', email : 'dev.mohib@gmail.com'}
    }
    
};
