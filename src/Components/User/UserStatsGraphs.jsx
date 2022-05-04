import React from "react";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";
import styles from "./UserStatsGraph.module.css";

export default function UserStatsGraph({ data }) {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (data.length > 0) {
      const graphData = data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      });
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
      setGraph(graphData);
    }
  }, [data]);

  return (
    <section className={` ${styles.graph} animeLeft`}>
      <div className={`${styles.graphItem} ${styles.total}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${styles.graphItem} `}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={`${styles.graphItem} `}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}
