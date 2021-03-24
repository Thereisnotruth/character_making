import Paper, { Shape } from "paper";

const draw_arms = (arm) => {
    const left_arm = Shape.Circle({
        center: [200, 150],
        radius: arm,
        fillColor: 'blue',
    });

    const right_arm = Shape.Circle({
        center: [100, 150],
        radius: arm,
        fillColor: 'blue',
    });

  Paper.view.draw();
};

export default draw_arms;
