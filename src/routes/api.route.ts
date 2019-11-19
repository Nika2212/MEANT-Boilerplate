import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class ApiRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        this.express.route('/api/users').get(this.userController.index.bind(this));
        this.express.route('/api/user/create').post(this.userController.create.bind(this));
        this.express.route('/api/user/show/:id').get(this.userController.show.bind(this));
        this.express.route('/api/user/update/:id').put(this.userController.update.bind(this));
        this.express.route('/api/user/destroy/:id').delete(this.userController.destroy.bind(this));

        return this;
    }
}
