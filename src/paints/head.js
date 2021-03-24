import Paper, { Shape } from "paper";

const draw_head = (arm) => {
    const c = Shape.Circle({
        center: [150, 100],
        radius: arm,
        fillColor: 'blue',
    });

  Paper.view.draw();
};

export default draw_head;
