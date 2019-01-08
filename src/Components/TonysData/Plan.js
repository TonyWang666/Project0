import React, {Component} from 'react';
import "./Plan.css";



class Plan extends Component {
    
    render(){
        var sty = {
            "border" : "1px solid black",
            'width' : "300px"
        };
        var all = {     "width" : "300px",
                        "height" : "60px",
                        "border" : "1px solid black"
    };
        return(
     <div>
        <p className = "p">Four Year Academic Plan </p>
        <table>
            <tbody>
                <tr >
                    <td style = {sty}></td>
                    <td style = {sty}>9th Grade</td>
                    <td style = {sty}>10th Grade</td>
                    <td style = {sty}>11th Grade</td>
                    <td style = {sty}>12th Grade</td>
                </tr>
                <tr>
                    <td style = {all}>A - Histroy/Social Science (2 years)</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
                <tr>
                    <td style = {all}>B - English (4 years)</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
                <tr>
                    <td style = {all}>C - Mathmematics</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
                <tr>
                    <td style = {all}>D - Laboratory Science (2/3 years)</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
                <tr>
                    <td style = {all}>E - Language(LOTE) (2/3 years)</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
                <tr>
                    <td style = {all}>F - Arts, PE (1 years, 2 years)</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
                <tr>
                    <td style = {all}>G - College-Prep Elective (1 year)</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
                <tr>
                    <td style = {all}>GPA(un-weighted/weighted)</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
                <tr>
                    <td style = {all}>U - College Courses</td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                    <td style = {all}></td>
                </tr>
            </tbody>
        </table>
     </div>
    );
    }
}


export default Plan;