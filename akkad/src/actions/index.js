import appActions from "./appActions";
import cameraActions from "./CameraActions";
import lightActions from "./LightActions";
import sceneActions from "./SceneActions";
import shapeActions from "./ShapeActions";
import meshTriggerActions from "./MeshTriggerActions";
import materialActions from "./MaterialActions";
import animationActions from "./AnimationActions";

export default {
    ...appActions,
    ...cameraActions,
    ...lightActions,
    ...sceneActions,
    ...shapeActions,
    ...meshTriggerActions,
    ...materialActions,
    ...animationActions
};