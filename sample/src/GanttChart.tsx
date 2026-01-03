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
        {
            id: 4,
            name: "Task2",
            level: 99,
            start_date: new Date("2026-01-04"),
            end_date: new Date("2026-01-14"),
            duration: 10,
            progress: 0
        },
        {
            id: 5,
            name: "Task3",
            level: 99,
            start_date: new Date("2026-01-15"),
            end_date: new Date("2026-01-28"),
            duration: 10,
            progress: 0
        },
        {
            id: 6,
            name: "Task4",
            level: 99,
            start_date: new Date("2026-01-28"),
            end_date: new Date("2026-02-12"),
            duration: 10,
            progress: 0
        },
        {
            id: 11,
            name: "Review1",
            level: 1,
            start_date: new Date("2026-02-12"),
            end_date: new Date("2026-02-12"),
            duration: 0,
            progress: 0
        },
        {
            id: 8,
            name: "Iteration2",
            level: 1,
            start_date: new Date("2026-02-15"),
            end_date: new Date("2026-02-20"),
            duration: 5,
            progress: 0
        },
        {
            id: 9,
            name: "Task6",
            level: 99,
            start_date: new Date("2026-02-21"),
            end_date: new Date("2026-02-28"),
            duration: 5,
            progress: 0
        },
        {
            id: 10,
            name: "Task7",
            level: 99,
            start_date: new Date("2026-03-01"),
            end_date: new Date("2026-03-14"),
            duration: 10,
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