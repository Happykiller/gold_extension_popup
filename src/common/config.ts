class Config {
  mode:string;
  port:string;

  constructor(){
    this.mode = process.env.APP_MODE;
    this.port = process.env.APP_PORT;
  }
}

const config = new Config();

export default config;