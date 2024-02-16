class Config {
  mode:string;
  port:string;
  cb_owner:string;
  cb_number:string;
  cb_expiration_date:string;
  cb_crypto:string;

  constructor(){
    this.mode = process.env.APP_MODE;
    this.port = process.env.APP_PORT;
    this.cb_owner = process.env.CB_OWNER;
    this.cb_number = process.env.CB_NUMBER;
    this.cb_expiration_date = process.env.CB_EXPIRATION_DATE;
    this.cb_crypto = process.env.CB_CRYPTO;
  }
}

const config = new Config();

export default config;