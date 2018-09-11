import * as Express  from 'express';
export default(app)=>{
    // Install a "/ping" route that returns "pong"
    app.get('/ping', (req: Express.Request, res: Express.Response)=>{
      res.send('pong');
    });
  }