class Config {
  mode:string;
  port:string;
  debug:boolean;

  constructor(){
    this.mode = process.env.APP_MODE;
    this.port = process.env.APP_PORT;
    this.debug = Boolean(process.env.APP_DEBUG) || false;
  }
}

const config = new Config();

export default config;