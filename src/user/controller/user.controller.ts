import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {

    constructor(private userservice: UserService){}

    @Post()
    create(@Body() user:User): Observable<User>{
        return this.userservice.create(user);
    }

    @Get(':id')
    findOne(@Param() params): Observable<User>{
        return this.userservice.findOne(params.id);
    }

    @Get()
    findAll(): Observable<User[]>{
        return this.userservice.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<any> {
        return this.userservice.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: User): Observable<any>{
        return this.userservice.updateOne(Number(id),user);
    }

}
