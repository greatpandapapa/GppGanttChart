# GppGanttChart
## 概要
- シンプルなReactのガントチャートコンポーネント
- ProjectPlanで使っているコンポーネント

## 利用ライブラリ
- 以下をインストールする必要あり
```
npm install @mui/material @emotion/react @emotion/styled
npm install date-fns
```

## props
- width:number
  - ガントチャートの幅
- height:number
  - ガントチャートの高さ
- data:IGppGanttData[] 
  - 各タスクのデータ
- links:IGppGanttLink[]
  - 各タスク間を結ぶ線のデータ
- config:IGppGanttConfig
  - 設定
- columns:IGppGanttColumns
  - テーブル部の表示絡む

## 補足
- タスクのバーは、dataのstart_dateとend_dateで表示する
- durationが0の場合は、バーではなく◆を表示する
- 休日設定はconfig.holidaiesにyyyy-MM-dd形式の文字列で設定する
  - config.date_formatでフォーマット指定すれば、その形式で登録する

## サンプルコード
```
import {GppGanttChart,IGppGanttConfig,GppDefaultConfig,IGppGanttData,IGppGanttColumns, IGppGanttLink} from "./GppGanttChart";

function GanttChart() {
    const config:IGppGanttConfig = GppDefaultConfig();

    const data:IGppGanttData[] = [
        {
            id: 1,
            name: "Phase1",
            level: 0,
            start_date: new Date("2025-12-30"),
            end_date: new Date("2026-03-31"),
            duration: 5,
            progress: 0
        },
        {
            id: 2,
            name: "Iteration1",
            level: 1,
            start_date: new Date("2025-12-30"),
            end_date: new Date("2026-01-28"),
            duration: 5,
            progress: 0
        },
        {
            id: 3,
            name: "Task1",
            level: 99,
            start_date: new Date("2025-12-30"),
            end_date: new Date("2026-01-03"),
            duration: 5,
            progress: 0
        },
    ];
    const links:IGppGanttLink[] = [
        {
            id: 1,
            source: 3,
            target: 4,
            type: "e2s",
        },
        {
            id: 2,
            source: 4,
            target: 5,
            type: "e2s",
        },
        {
            id: 3,
            source: 5,
            target: 6,
            type: "e2s",
        },
        {
            id: 4,
            source: 6,
            target: 7,
            type: "e2s",
        }
    ];
    config.holidaies = [
        "2025-12-31",
        "2026-01-01",
        "2026-01-02",
        "2026-01-03",
    ]
    config.lang_mesg_month = "月";
    config.lang_mesg_week = "週";
    config.lang_mesg_day = "日";
    config.lang_mesg_standard = "標準";
    config.lang_mesg_narrow = "狭い";
    
    const columns:IGppGanttColumns [] =  [
        {id:"id",name:"ID",align:"center",width:50},
        {id:"name",name:"名前",align:"left",width:120},
        {id:"start_date",name:"開始",align:"center",width:80},
        {id:"end_date",name:"終了",align:"center",width:80},
        {id:"duration",name:"日数",align:"center",width:40,},
    ]

    // ガントチャートの高さと幅
    const width = 1200;
    const height = 300;

    return (
        <>
            <GppGanttChart width={width} height={height} config={config} columns={columns} data={data} links={links}/>
        </>
    );
}

export default GanttChart;
```