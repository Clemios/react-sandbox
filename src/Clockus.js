import React, { Component } from 'react';

class Clockus extends Component {

    state = {
        date: new Date(),
        color: this.props.color
    }

 setupAnalogClock(canvas, clockWidth, color) {
    var ctx = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    function tick() {
        var date = new Date();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawStatic();

        var hours = date.getHours();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        drawHand(clockWidth / 3, hours * 30);

        var minutes = date.getMinutes();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        drawHand(clockWidth / 2, minutes * 6);

        var seconds = date.getSeconds();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        drawHand(clockWidth / 2, seconds * 6);


        function drawStatic() {
            ctx.beginPath();
            ctx.arc(centerX, centerY, clockWidth / 2, 0, 2 * Math.PI, false);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();

            drawNumbers();

            function drawNumbers() {
                var i = 12;
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                while (i > 0) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.translate(centerX, centerY);
                    var angle = (i * 30) * Math.PI / 180;
                    ctx.rotate(angle);
                    ctx.translate(0, -clockWidth / 2);

                    ctx.moveTo(0, 0);
                    ctx.lineTo(0, 10);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.restore();
                    i--;
                }
            }
        }

        function drawHand(length, angle) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(centerX, centerY);
            ctx.rotate(-180 * Math.PI / 180);
            ctx.rotate(angle * Math.PI / 180);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, length);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
    }

   tick();
    window.setInterval(tick, 1000);
}

    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({
                date: new Date()
            }),
            1000
        );
        this.setupAnalogClock(document.getElementById("analogClock"), 100, this.state.color)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <canvas id="analogClock" width="102" height="102">Clock</canvas>
            </div>
        );
    }
}

export default Clockus;
