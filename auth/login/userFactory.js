const User = require('./user');

let bcrypt = require('bcrypt');

class UserFactory {

    /**
     *
     * @param {User} userRaw
     */
    makeFromRequest(userRaw) {
        let user = new User(userRaw.user_name);
        return bcrypt.hash(userRaw.password, 10).then(function(hash) {
            user.setPassword(hash);
            return user;
        });
    }
}

module.exports = UserFactory;
