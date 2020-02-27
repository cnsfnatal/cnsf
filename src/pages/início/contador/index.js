import React, { Component } from 'react';

// Image

import Study from '../../../img/study.svg';
import School from '../../../img/school.svg';
import Training from '../../../img/training.svg';
import Teacher from '../../../img/teacher.svg';


// Styles

import './contador.scss';


export default class Contador extends Component {

    

    render() {
        return (
            <div className="container-cont">

                    <div className="container-study">

                        <div className="study-logo">
                           <img src={Study}></img>
                        </div>

                        <div className="study-text">

                            <h1>+ de <span className="title-number">1000</span></h1>

                            <p className="text-main">alunos impactados</p>
                            
                        </div>

                    </div>



                    <div className="container-school"> 

                            <div className="school-logo">

                                <img src={Training}></img>

                            </div>


                            <div className="school-text">

                                <h1><span className="title-number">30</span></h1>

                                <p className="text-main">intervenções</p>
                            </div>

                    </div>


                    <div className="container-training">

                        <div className="training-logo">

                            <img src={Teacher}></img>

                        </div>


                        <div className="training-text">

                            <h1>+ de <span className="title-number">20</span></h1>

                            <p className="text-main">professores impactados</p>
                            
                        </div>

                    </div>
                        

                    


                    <div className="container-teacher">

                        <div className="teacher-logo">

                            <img src={School}></img>

                        </div>


                        <div className="teacher-text">

                            <h1><span className="title-number">5</span></h1>

                            <p className="text-main">participando ativamente do programa</p>

                        </div>
                        

                    </div>

                </div>
        )
    }
}