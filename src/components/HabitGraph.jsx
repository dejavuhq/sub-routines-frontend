import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import CalendarHeatMap from 'react-calendar-heatmap';
import { timeDays } from 'd3-time';
import { shiftDate } from '../utils';

import 'react-calendar-heatmap/dist/styles.css';
import '../assets/styles/components/Stats.scss';

import UserContext from '../context/UserContext';

function HabitGraph() {
  const {
    user: { stats },
  } = useContext(UserContext);

  const hasLength = stats && stats.length;
  const starDate = hasLength && new Date(stats[stats.length - 1].date);
  const endDate = hasLength && new Date();
  let data = [];

  if (hasLength) {
    const dates = timeDays(shiftDate(endDate, -90), endDate, 1);

    data = dates.reverse().map((date) => {
      let result = { date, count: 0 };

      stats.forEach((obj) => {
        const objDate = new Date(`${obj.date}T05:00:00.000Z`);

        if (objDate.getTime() === date.getTime()) {
          result = {
            ...result,
            count: obj.total_habits_done_today,
          };
        }
      });

      return result;
    });
  }


  return hasLength ? (
    <div className="graph">
      <CalendarHeatMap
        startDate={data[data.length - 1].date}
        endDate={data[data[0].date]}
        values={data}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={({ date, count }) => {
          return {
            'data-tip': `${count} habits on ${date.toISOString().slice(0, 10)}`,
          };
        }}
      />
      <ReactTooltip />
    </div>
  ) : (
    <h3>Aún no tienes stats</h3>
  );
}

export default HabitGraph;
