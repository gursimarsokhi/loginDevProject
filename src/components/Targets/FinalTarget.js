import React from 'react';
import { Table} from 'react-bootstrap';
import '../../../src/content.css';
const FinalTarget = ({minLeads, maxLeads, date}) =>{ 
    return(
    <div>
        <Table responsive="sm" className="targetContainer" style={{color:'#6E6E6E'}}>
            <tbody>
    <tr><td >Leads per day</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>{minLeads} - {maxLeads}</td></tr>
            <tr><td>Cost per lead</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>$2.5 - $5</td></tr>
            <tr><td>Start date</td><td style={{color: '#2B676B',fontSize: '19px', fontWeight:600}}>{date}</td></tr>
            <tr><td>End date</td><td style={{color: '#2B676B',fontSize: '15px', fontWeight:600}}>No end date</td></tr>
            </tbody>
            
        </Table>
    </div>
)}
export default FinalTarget