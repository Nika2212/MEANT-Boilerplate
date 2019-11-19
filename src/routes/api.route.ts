import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class ApiRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        this.express.route('/').get(this.homeController.index.bind(this));
        this.express.route('/registration').post(this.userController.create.bind(this));

        return this;
    }
}
