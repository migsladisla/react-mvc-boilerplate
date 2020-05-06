class CONSTANTS {
    static PORT = class {
        static get HTTP_PORT() {
            return 80;
        }
    
        static get HTTPS_PORT() {
            return 443;
        }
        
        static get LOCALHOST_PORT() {
            return 8082;
        }
    
        static get ACTIVE_PORT() {
            return this.LOCALHOST_PORT;
        }
    }

    static COOKIE = class {
        static get JWT_KEY() {
            return 'token';
        }
    }
    
    static DB_PARAMS = class {
        static get DB_USER(){
            return "admin"
        }

        static get DB_PASSWORD(){
            return "password"
        }

        static get DB_URI(){
            return `mongodb+srv://[username]:[password]@project.mongodb.net/test?retryWrites=true&w=majority`
        }
    }

    static ENV_TYPE = class {
        static get DEVELOPMENT(){
            return "development";
        }

        static get PRODUCTION(){
            return "production";
        }
    }
}

module.exports.CONSTANTS = CONSTANTS;