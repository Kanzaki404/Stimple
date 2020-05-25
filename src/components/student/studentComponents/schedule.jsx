import React from "react";
import {useSelector} from 'react-redux'

export default function Schedule() {
  const schedule = useSelector(state=>state.courses.courses)

  return (
    <div class="timetable">
    <div class="week-names">
      <div>monday</div>
      <div>tuesday</div>
      <div>wednesday</div>
      <div>thursday</div>
      <div>friday</div>
      <div class="weekend">saturday</div>
      <div class="weekend">sunday</div>
    </div>
    <div class="time-interval">
      <div>8:00 - 10:00</div>
      <div>10:00 - 12:00</div>
      <div>12:00 - 14:00</div>
      <div>14:00 - 16:00</div>
      <div>16:00 - 18:00</div>
      <div>18:00 - 20:00</div>
    </div>
    <div class="content">
      <div>
        <div class="accent-orange-gradient"><h4>{schedule[0].courseName}</h4></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
          <div>
  <div class="accent-green-gradient"><h4>{schedule[1].courseName}</h4></div>
      </div>
      <div class="weekend"></div>
      <div class="weekend"></div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <div class="accent-cyan-gradient"><h4>{schedule[2].courseName}</h4></div>
      </div>
      <div></div>
      <div class="weekend"></div>
      <div class="weekend"></div>
      <div>
        <div class="accent-pink-gradient"><h4>{schedule[3].courseName}</h4></div>
      </div>
      <div></div>
      <div>
        <div class="accent-purple-gradient"><h4>{schedule[4].courseName}</h4></div>
      </div>
      <div></div>
      <div></div>
      <div class="weekend"></div>
      <div class="weekend"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="weekend"></div>
      <div class="weekend"></div>
      <div>
        <div class="accent-purple-gradient"><h4>{schedule[5].courseName}</h4></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="weekend"></div>
      <div class="weekend"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="weekend"></div>
      <div class="weekend"></div>
    </div>
  </div>
  );
}