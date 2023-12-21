import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ImageAvatars from './ImageAvatars';
export default function BasicTimeline() {
  return (
    <Timeline sx={{height:'440px',width:'635px'}}>
      <TimelineItem sx={{height:'140px'}}>
        <TimelineSeparator sx={{marginLeft:'-640px'}}>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className="timelinetop">
                <div className="tlLeft">12 Invoices have been paid</div>
                <div className="tlRight">12 min ago</div>
            </div>
            <div className="timelinemiddle">Invoices have been paid to the company</div>
            <div className="timelinedown">
                <div className="lineDownLeft">
                  <img src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/icons/file-icons/pdf.png" alt="" width={'26px'} height={'26px'}/>
                </div>
                <div className="lineDownRight">Invoices.pdf</div>

            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{height:'140px'}}>
        <TimelineSeparator sx={{marginLeft:'-640px'}}>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="timelinetop">
                <div className="tlLeft">Client Meeting</div>
                <div className="tlRight">45 min ago</div>
            </div>
            <div className="timelinemiddle">Project meeting with john @10:15am</div>
            <div className="timelinedown">
                <div className="linedownLeftM">
                  <img className='tlDownimg' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png" alt="" width={'38px'} height={'38px'}/>
                </div>
                <div className="lineDownRight">
                    <div className="downRightTop">Steven Nash (Client)</div>
                    <div className="downRightDown">CEO of ThemeSelection</div>
                </div>

            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{height:'135px'}}>
        <TimelineSeparator sx={{marginLeft:'-640px'}}>
          <TimelineDot color='info' />
        </TimelineSeparator>
        <TimelineContent>
        <div className="timelinetop">
                <div className="tlLeft">Create a new project for client</div>
                <div className="tlRight">2 days ago</div>
            </div>
            <div className="timelinemiddle">5 team members in a project</div>
            <div className="timelinePic">
                <ImageAvatars></ImageAvatars>
            </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}