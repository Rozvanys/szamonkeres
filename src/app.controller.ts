import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { newFoglalasDto } from './newFoglalas.dto.js';
import fs from 'node:fs'
import { stringify } from 'node:querystring';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }

  @Get('foglalas')
  @Render('foglalas')
  getFoglalas(){

  }

  @Post('foglalas')
  @Render('foglalas')
  foglalas(@Body() body: newFoglalasDto){
    const errors: string[] = [];

    if (!body.nev ){
      errors.push("name is requier")
    }
    if (!body.email){
      errors.push("email is requier")
    }else if (/[0-z]@[0-z]/.test(body.email)){
      errors.push("Email should be this form xx@xx")
    }
    if(!body.idopont){
      errors.push("A dátum kötelező")
    }
    if (body.vendeg_szam < 1){
      errors.push("The number must be more than 0")
    } else if (body.vendeg_szam > 10){
      errors.push("The number must be less than 10")
    }

    fs.writeFileSync('foglalas.json','utf-8' )


    


    
  }

}
