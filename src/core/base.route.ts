import express from 'express';
import { HomeController } from "../controllers/home.controller";
import { UserController } from "../controllers/user.controller";

export class BaseRoute {
    protected homeController: HomeController;
    protected userController: UserController;

    constructor(protected express: express.Application) {
        this.homeController = new HomeController();
        this.userController = new UserController();
    }
}
