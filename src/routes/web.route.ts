import { BaseRoute } from "../core/base.route";
import { IBaseRoute } from "../core/IBase.route";

export class WebRoute extends BaseRoute implements IBaseRoute {
    public route(): BaseRoute {
        this.express.route('/').get(this.homeController.index.bind(this));

        return this;
    }
}
