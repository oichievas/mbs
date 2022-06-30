import cls from './ProgressCircle.module.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import VisibilitySensor from "react-visibility-sensor";

const ProgressCircle = ({percentage, article}) => {
    return (
            <VisibilitySensor partialVisibility={true}>
                {({ isVisible }) => {
                    return (
                        <div className={cls.root}>
                            <AnimatedProgressProvider
                                valueStart={20}
                                valueEnd={isVisible ? percentage : 0}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            >
                                {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}${article}`}
                                        styles={
                                            buildStyles({
                                                pathTransition: "none",
                                                pathColor: `#FF0000`,
                                                textColor: 'black',
                                                textSize: "24px",
                                                trailColor: 'rgba(255, 0, 0, 0.2)',
                                                backgroundColor: 'white'
                                            })
                                        }
                                    />
                                );
                                }}
                            </AnimatedProgressProvider>
                        </div>
                    )
                }}
            </VisibilitySensor>
    )
}

export default ProgressCircle