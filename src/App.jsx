import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider, Input, InputNumber } from 'antd';
import {CheckOutlined} from '@ant-design/icons';
import * as service from './service'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreSheetId: -1, 
            scorerName: "",
            scorerEmployeeNumber: "",
            scorerPassword: "",
            scorerIdentified: false,
            welcomeMessage: "",

            // 1 党委办公室
            coreWork_dwbgs: 0.0, 
            importantWork_dwbgs: 0.0,
            comment_dwbgs: "",

            // 2 党委组织部、党校
            coreWork_dwzzb: 0.0, 
            importantWork_dwzzb: 0.0,
            comment_dwzzb : "",
            // 3 党委宣传部、新闻中心、党委教师工作部
            coreWork_dwxcb: 0.0, 
            importantWork_dwxcb: 0.0,
            comment_dwxcb : "",
            // 4 党委统战部
            coreWork_dwtzb: 0.0, 
            importantWork_dwtzb: 0.0,
            comment_dwtzb : "",
            // 5 纪检监察机构
            coreWork_jjjcjg: 0.0, 
            importantWork_jjjcjg: 0.0,
            comment_jjjcjg : "",
            // 6 学生工作部（处）、武装部、创新创业学院
            coreWork_xsgzb: 0.0, 
            importantWork_xsgzb: 0.0,
            comment_xsgzb : "",
            // 7 保卫部（处）
            coreWork_bwb: 0.0, 
            importantWork_bwb: 0.0,
            comment_bwb : "",
            // 8 校工会
            coreWork_xgh: 0.0, 
            importantWork_xgh: 0.0,
            comment_xgh : "",
            // 9 校团委
            coreWork_xtw: 0.0, 
            importantWork_xtw: 0.0,
            comment_xtw : "",
            // 10 机关党委
            coreWork_jgdw: 0.0, 
            importantWork_jgdw: 0.0,
            comment_jgdw : "",
            // 11 校长办公室
            coreWork_xzbgs: 0.0, 
            importantWork_xzbgs: 0.0,
            comment_xzbgs : "",
            // 12 发展规划与学科建设处、“双一流”建设办公室（林学学部、林业工程学部）
            coreWork_fzghyxkjsc: 0.0, 
            importantWork_fzghyxkjsc: 0.0,
            comment_fzghyxkjsc : "",
            // 13 教务处、教师教学发展中心
            coreWork_jwc: 0.0, 
            importantWork_jwc: 0.0,
            comment_jwc : "",
            // 14 科技处、科技开发服务部、军工项目办
            coreWork_kjc: 0.0, 
            importantWork_kjc: 0.0,
            comment_kjc : "",
            // 15 人文社科处
            coreWork_rwskc: 0.0, 
            importantWork_rwskc: 0.0,
            comment_rwskc : "",
            // 16 研究生院、研究生工作部
            coreWork_yjsy: 0.0, 
            importantWork_yjsy: 0.0,
            comment_yjsy : "",
            // 17 国际合作处、港澳台事务办公室
            coreWork_gjhzc: 0.0, 
            importantWork_gjhzc: 0.0,
            comment_gjhzc : "",
            // 18 人事处、高层次人才服务办公室
            coreWork_rsc: 0.0, 
            importantWork_rsc: 0.0,
            comment_rsc : "",
            // 19 审计处
            coreWork_sjc: 0.0, 
            importantWork_sjc: 0.0,
            comment_sjc : "",
            // 20 财务处
            coreWork_cwc: 0.0, 
            importantWork_cwc: 0.0,
            comment_cwc : "",
            // 21 国有资产管理处
            coreWork_gyzcglc: 0.0, 
            importantWork_gyzcglc: 0.0,
            comment_gyzcglc : "",
            // 22 实验室与基地建设管理处、白马基地建设办公室
            coreWork_sysyjdjsglc: 0.0, 
            importantWork_sysyjdjsglc: 0.0,
            comment_sysyjdjsglc : "",
            // 23 白马校区建设指挥部
            coreWork_bmxqjszhb: 0.0, 
            importantWork_bmxqjszhb: 0.0,
            comment_bmxqjszhb : "",
            // 24 基建处
            coreWork_jjc: 0.0, 
            importantWork_jjc: 0.0,
            comment_jjc : "",
            // 25 后勤管理处、后勤服务总公司、后勤党工委
            coreWork_hqglc: 0.0, 
            importantWork_hqglc: 0.0,
            comment_hqglc : "",
            // 26 离退休工作处
            coreWork_ltxgzc: 0.0, 
            importantWork_ltxgzc: 0.0,
            comment_ltxgzc : "",
            // 27 教学评估办公室、高等教育研究所
            coreWork_jxpgbgs: 0.0, 
            importantWork_jxpgbgs: 0.0,
            comment_jxpgbgs : "",
            // 28 网络安全和信息化办公室
            coreWork_wlaqhxxhbgs: 0.0, 
            importantWork_wlaqhxxhbgs: 0.0,
            comment_wlaqhxxhbgs : "",
            // 29 继续教育学院、应用技术学院
            coreWork_jxjyxy: 0.0, 
            importantWork_jxjyxy: 0.0,
            comment_jxjyxy : "",
            // 30 国际教育学院
            coreWork_gjjyxy: 0.0, 
            importantWork_gjjyxy: 0.0,
            comment_gjjyxy : "",
            // 31 图书馆
            coreWork_tsg: 0.0, 
            importantWork_tsg: 0.0,
            comment_tsg : "",
            // 32 期刊编辑部
            coreWork_qkbjb: 0.0, 
            importantWork_qkbjb: 0.0,
            comment_qkbjb : "",
            // 33 校友工作办公室、学校发展基金会秘书处
            coreWork_xygzbgs: 0.0, 
            importantWork_xygzbgs: 0.0,
            comment_xygzbgs : "",
            // 34 资产经营公司
            coreWork_zcjygs: 0.0, 
            importantWork_zcjygs: 0.0,
            comment_zcjygs : "",
            // 35 博物馆（筹）、档案馆
            coreWork_bwg: 0.0, 
            importantWork_bwg: 0.0,
            comment_bwg : "",
            // 36 现代分析测试中心
            coreWork_xdfxcszx: 0.0, 
            importantWork_xdfxcszx: 0.0,
            comment_xdfxcszx : "",
        };
        this.loadScoreSheet = this.loadScoreSheet.bind(this);
        this.saveScoreSheet = this.saveScoreSheet.bind(this);
    }

    loadScoreSheet() {
        console.log("正在从后端获取评分表。评分员不变号为：" + this.state.scorerEmployeeNumber + "，评分员密码为：" + this.state.scorerPassword);
        service.queryScoreSheetByEmployeeNumberAndPassword(this.state.scorerEmployeeNumber, this.state.scorerPassword).then(response => {
          console.log(JSON.stringify(response));
          let scoreSheet = response.data;
          if (scoreSheet.id > 0) {
            this.setState({
              scoreSheetId: scoreSheet.id, 
              scorerName: scoreSheet.userName,
              scorerEmployeeNumber: scoreSheet.userEmployeeNumber,
              scorerPassword: scoreSheet.userPassword,
              scorerIdentified: true,
              welcomeMessage: "欢迎用户" + scoreSheet.userName + "使用南林机关部门（单位）重要工作完成情况评分系统。",
              
              // 1 党委办公室
              coreWork_dwbgs: scoreSheet.coreWork_dwbgs, 
              importantWork_dwbgs: scoreSheet.importantWork_dwbgs,
              comment_dwbgs: scoreSheet.comment_dwbgs,

              // 2 党委组织部、党校
              coreWork_dwzzb: scoreSheet.coreWork_dwzzb, 
              importantWork_dwzzb: scoreSheet.importantWork_dwzzb,
              comment_dwzzb : scoreSheet.comment_dwzzb,
              // 3 党委宣传部、新闻中心、党委教师工作部
              coreWork_dwxcb: scoreSheet.coreWork_dwxcb, 
              importantWork_dwxcb: scoreSheet.importantWork_dwxcb,
              comment_dwxcb : scoreSheet.comment_dwxcb,
              // 4 党委统战部
              coreWork_dwtzb: scoreSheet.coreWork_dwtzb, 
              importantWork_dwtzb: scoreSheet.importantWork_dwtzb,
              comment_dwtzb : scoreSheet.comment_dwtzb,
              // 5 纪检监察机构
              coreWork_jjjcjg: scoreSheet.coreWork_jjjcjg, 
              importantWork_jjjcjg: scoreSheet.importantWork_jjjcjg,
              comment_jjjcjg : scoreSheet.comment_jjjcjg,
              // 6 学生工作部（处）、武装部、创新创业学院
              coreWork_xsgzb: scoreSheet.coreWork_xsgzb, 
              importantWork_xsgzb: scoreSheet.importantWork_xsgzb,
              comment_xsgzb : scoreSheet.comment_xsgzb,
              // 7 保卫部（处）
              coreWork_bwb: scoreSheet.coreWork_bwb, 
              importantWork_bwb: scoreSheet.importantWork_bwb,
              comment_bwb : scoreSheet.comment_bwb,
              // 8 校工会
              coreWork_xgh: scoreSheet.coreWork_xgh, 
              importantWork_xgh: scoreSheet.importantWork_xgh,
              comment_xgh : scoreSheet.comment_xgh,
              // 9 校团委
              coreWork_xtw: scoreSheet.coreWork_xtw, 
              importantWork_xtw: scoreSheet.importantWork_xtw,
              comment_xtw : scoreSheet.comment_xtw,
              // 10 机关党委
              coreWork_jgdw: scoreSheet.coreWork_jgdw, 
              importantWork_jgdw: scoreSheet.importantWork_jgdw,
              comment_jgdw : scoreSheet.comment_jgdw,
              // 11 校长办公室
              coreWork_xzbgs: scoreSheet.coreWork_xzbgs, 
              importantWork_xzbgs: scoreSheet.importantWork_xzbgs,
              comment_xzbgs : scoreSheet.comment_xzbgs,
              // 12 发展规划与学科建设处、“双一流”建设办公室（林学学部、林业工程学部）
              coreWork_fzghyxkjsc: scoreSheet.coreWork_fzghyxkjsc, 
              importantWork_fzghyxkjsc: scoreSheet.importantWork_fzghyxkjsc,
              comment_fzghyxkjsc : scoreSheet.comment_fzghyxkjsc,
              // 13 教务处、教师教学发展中心
              coreWork_jwc: scoreSheet.coreWork_jwc, 
              importantWork_jwc: scoreSheet.importantWork_jwc,
              comment_jwc : scoreSheet.comment_jwc,
              // 14 科技处、科技开发服务部、军工项目办
              coreWork_kjc: scoreSheet.coreWork_kjc, 
              importantWork_kjc: scoreSheet.importantWork_kjc,
              comment_kjc : scoreSheet.comment_kjc,
              // 15 人文社科处
              coreWork_rwskc: scoreSheet.coreWork_rwskc, 
              importantWork_rwskc: scoreSheet.importantWork_rwskc,
              comment_rwskc : scoreSheet.comment_rwskc,
              // 16 研究生院、研究生工作部
              coreWork_yjsy: scoreSheet.coreWork_yjsy, 
              importantWork_yjsy: scoreSheet.importantWork_yjsy,
              comment_yjsy : scoreSheet.comment_yjsy,
              // 17 国际合作处、港澳台事务办公室
              coreWork_gjhzc: scoreSheet.coreWork_gjhzc, 
              importantWork_gjhzc: scoreSheet.importantWork_gjhzc,
              comment_gjhzc : scoreSheet.comment_gjhzc,
              // 18 人事处、高层次人才服务办公室
              coreWork_rsc: scoreSheet.coreWork_rsc, 
              importantWork_rsc: scoreSheet.importantWork_rsc,
              comment_rsc : scoreSheet.comment_rsc,
              // 19 审计处
              coreWork_sjc: scoreSheet.coreWork_sjc, 
              importantWork_sjc: scoreSheet.importantWork_sjc,
              comment_sjc : scoreSheet.comment_sjc,
              // 20 财务处
              coreWork_cwc: scoreSheet.coreWork_cwc, 
              importantWork_cwc: scoreSheet.importantWork_cwc,
              comment_cwc : scoreSheet.comment_cwc,
              // 21 国有资产管理处
              coreWork_gyzcglc: scoreSheet.coreWork_gyzcglc, 
              importantWork_gyzcglc: scoreSheet.importantWork_gyzcglc,
              comment_gyzcglc : scoreSheet.comment_gyzcglc,
              // 22 实验室与基地建设管理处、白马基地建设办公室
              coreWork_sysyjdjsglc: scoreSheet.coreWork_sysyjdjsglc, 
              importantWork_sysyjdjsglc: scoreSheet.importantWork_sysyjdjsglc,
              comment_sysyjdjsglc : scoreSheet.comment_sysyjdjsglc,
              // 23 白马校区建设指挥部
              coreWork_bmxqjszhb: scoreSheet.coreWork_bmxqjszhb, 
              importantWork_bmxqjszhb: scoreSheet.importantWork_bmxqjszhb,
              comment_bmxqjszhb : scoreSheet.comment_bmxqjszhb,
              // 24 基建处
              coreWork_jjc: scoreSheet.coreWork_jjc, 
              importantWork_jjc: scoreSheet.importantWork_jjc,
              comment_jjc : scoreSheet.comment_jjc,
              // 25 后勤管理处、后勤服务总公司、后勤党工委
              coreWork_hqglc: scoreSheet.coreWork_hqglc, 
              importantWork_hqglc: scoreSheet.importantWork_hqglc,
              comment_hqglc : scoreSheet.comment_hqglc,
              // 26 离退休工作处
              coreWork_ltxgzc: scoreSheet.coreWork_ltxgzc, 
              importantWork_ltxgzc: scoreSheet.importantWork_ltxgzc,
              comment_ltxgzc : scoreSheet.comment_ltxgzc,
              // 27 教学评估办公室、高等教育研究所
              coreWork_jxpgbgs: scoreSheet.coreWork_jxpgbgs, 
              importantWork_jxpgbgs: scoreSheet.importantWork_jxpgbgs,
              comment_jxpgbgs : scoreSheet.comment_jxpgbgs,
              // 28 网络安全和信息化办公室
              coreWork_wlaqhxxhbgs: scoreSheet.coreWork_wlaqhxxhbgs, 
              importantWork_wlaqhxxhbgs: scoreSheet.importantWork_wlaqhxxhbgs,
              comment_wlaqhxxhbgs : scoreSheet.comment_wlaqhxxhbgs,
              // 29 继续教育学院、应用技术学院
              coreWork_jxjyxy: scoreSheet.coreWork_jxjyxy, 
              importantWork_jxjyxy: scoreSheet.importantWork_jxjyxy,
              comment_jxjyxy : scoreSheet.comment_jxjyxy,
              // 30 国际教育学院
              coreWork_gjjyxy: scoreSheet.coreWork_gjjyxy, 
              importantWork_gjjyxy: scoreSheet.importantWork_gjjyxy,
              comment_gjjyxy : scoreSheet.comment_gjjyxy,
              // 31 图书馆
              coreWork_tsg: scoreSheet.coreWork_tsg, 
              importantWork_tsg: scoreSheet.importantWork_tsg,
              comment_tsg : scoreSheet.comment_tsg,
              // 32 期刊编辑部
              coreWork_qkbjb: scoreSheet.coreWork_qkbjb, 
              importantWork_qkbjb: scoreSheet.importantWork_qkbjb,
              comment_qkbjb : scoreSheet.comment_qkbjb,
              // 33 校友工作办公室、学校发展基金会秘书处
              coreWork_xygzbgs: scoreSheet.coreWork_xygzbgs, 
              importantWork_xygzbgs: scoreSheet.importantWork_xygzbgs,
              comment_xygzbgs : scoreSheet.comment_xygzbgs,
              // 34 资产经营公司
              coreWork_zcjygs: scoreSheet.coreWork_zcjygs, 
              importantWork_zcjygs: scoreSheet.importantWork_zcjygs,
              comment_zcjygs : scoreSheet.comment_zcjygs,
              // 35 博物馆（筹）、档案馆
              coreWork_bwg: scoreSheet.coreWork_bwg, 
              importantWork_bwg: scoreSheet.importantWork_bwg,
              comment_bwg : scoreSheet.comment_bwg,
              // 36 现代分析测试中心
              coreWork_xdfxcszx: scoreSheet.coreWork_xdfxcszx, 
              importantWork_xdfxcszx: scoreSheet.importantWork_xdfxcszx,
              comment_xdfxcszx : scoreSheet.comment_xdfxcszx,
            })
          } else {
            return;
          }
        })
    }

    saveScoreSheet() {
      if (!this.state.scorerIdentified) {
        alert("我们还不知道你是谁，请填写正确的工号和密码。")
      } else {
        let scoreSheet = {};
        scoreSheet.id = this.state.scoreSheetId;
        scoreSheet.userEmployeeNumber = this.state.scorerEmployeeNumber;
        scoreSheet.userName = this.state.scorerName;
        scoreSheet.userPassword = this.state.scorerPassword;

        
        // 1 党委办公室
        scoreSheet.coreWork_dwbgs = this.state.coreWork_dwbgs; 
        scoreSheet.importantWork_dwbgs = this.state.importantWork_dwbgs;
        scoreSheet.comment_dwbgs = this.state.comment_dwbgs;

        // 2 党委组织部、党校
        scoreSheet.coreWork_dwzzb = this.state.coreWork_dwzzb; 
        scoreSheet.importantWork_dwzzb = this.state.importantWork_dwzzb;
        scoreSheet.comment_dwzzb = this.state.comment_dwzzb;
        // 3 党委宣传部、新闻中心、党委教师工作部
        scoreSheet.coreWork_dwxcb= this.state.coreWork_dwxcb; 
        scoreSheet.importantWork_dwxcb = this.state.importantWork_dwxcb;
        scoreSheet.comment_dwxcb = this.state.comment_dwxcb;
        // 4 党委统战部
        scoreSheet.coreWork_dwtzb = this.state.coreWork_dwtzb; 
        scoreSheet.importantWork_dwtzb = this.state.importantWork_dwtzb;
        scoreSheet.comment_dwtzb = this.state.comment_dwtzb;
        // 5 纪检监察机构
        scoreSheet.coreWork_jjjcjg = this.state.coreWork_jjjcjg; 
        scoreSheet.importantWork_jjjcjg = this.state.importantWork_jjjcjg;
        scoreSheet.comment_jjjcjg = this.state.comment_jjjcjg;
        // 6 学生工作部（处）、武装部、创新创业学院
        scoreSheet.coreWork_xsgzb = this.state.coreWork_xsgzb; 
        scoreSheet.importantWork_xsgzb = this.state.importantWork_xsgzb;
        scoreSheet.comment_xsgzb = this.state.comment_xsgzb;
        // 7 保卫部（处）
        scoreSheet.coreWork_bwb = this.state.coreWork_bwb; 
        scoreSheet.importantWork_bwb = this.state.importantWork_bwb;
        scoreSheet.comment_bwb = this.state.comment_bwb;
        // 8 校工会
        scoreSheet.coreWork_xgh = this.state.coreWork_xgh; 
        scoreSheet.importantWork_xgh = this.state.importantWork_xgh;
        scoreSheet.comment_xgh = this.state.comment_xgh;
        // 9 校团委
        scoreSheet.coreWork_xtw = this.state.coreWork_xtw; 
        scoreSheet.importantWork_xtw = this.state.importantWork_xtw;
        scoreSheet.comment_xtw = this.state.comment_xtw;
        // 10 机关党委
        scoreSheet.coreWork_jgdw = this.state.coreWork_jgdw; 
        scoreSheet.importantWork_jgdw = this.state.importantWork_jgdw;
        scoreSheet.comment_jgdw = this.state.comment_jgdw;
        // 11 校长办公室
        scoreSheet.coreWork_xzbgs = this.state.coreWork_xzbgs; 
        scoreSheet.importantWork_xzbgs = this.state.importantWork_xzbgs;
        scoreSheet.comment_xzbgs = this.state.comment_xzbgs;
        // 12 发展规划与学科建设处、“双一流”建设办公室（林学学部、林业工程学部）
        scoreSheet.coreWork_fzghyxkjsc = this.state.coreWork_fzghyxkjsc; 
        scoreSheet.importantWork_fzghyxkjsc = this.state.importantWork_fzghyxkjsc;
        scoreSheet.comment_fzghyxkjsc = this.state.comment_fzghyxkjsc;
        // 13 教务处、教师教学发展中心
        scoreSheet.coreWork_jwc = this.state.coreWork_jwc; 
        scoreSheet.importantWork_jwc = this.state.importantWork_jwc;
        scoreSheet.comment_jwc = this.state.comment_jwc;
        // 14 科技处、科技开发服务部、军工项目办
        scoreSheet.coreWork_kjc = this.state.coreWork_kjc; 
        scoreSheet.importantWork_kjc = this.state.importantWork_kjc;
        scoreSheet.comment_kjc = this.state.comment_kjc;
        // 15 人文社科处
        scoreSheet.coreWork_rwskc = this.state.coreWork_rwskc; 
        scoreSheet.importantWork_rwskc = this.state.importantWork_rwskc;
        scoreSheet.comment_rwskc = this.state.comment_rwskc;
        // 16 研究生院、研究生工作部
        scoreSheet.coreWork_yjsy = this.state.coreWork_yjsy; 
        scoreSheet.importantWork_yjsy = this.state.importantWork_yjsy;
        scoreSheet.comment_yjsy = this.state.comment_yjsy;
        // 17 国际合作处、港澳台事务办公室
        scoreSheet.coreWork_gjhzc = this.state.coreWork_gjhzc; 
        scoreSheet.importantWork_gjhzc = this.state.importantWork_gjhzc;
        scoreSheet.comment_gjhzc = this.state.comment_gjhzc;
        // 18 人事处、高层次人才服务办公室
        scoreSheet.coreWork_rsc = this.state.coreWork_rsc; 
        scoreSheet.importantWork_rsc = this.state.importantWork_rsc;
        scoreSheet.comment_rsc = this.state.comment_rsc;
        // 19 审计处
        scoreSheet.coreWork_sjc = this.state.coreWork_sjc; 
        scoreSheet.importantWork_sjc = this.state.importantWork_sjc;
        scoreSheet.comment_sjc = this.state.comment_sjc;
        // 20 财务处
        scoreSheet.coreWork_cwc = this.state.coreWork_cwc; 
        scoreSheet.importantWork_cwc = this.state.importantWork_cwc;
        scoreSheet.comment_cwc = this.state.comment_cwc;
        // 21 国有资产管理处
        scoreSheet.coreWork_gyzcglc = this.state.coreWork_gyzcglc; 
        scoreSheet.importantWork_gyzcglc = this.state.importantWork_gyzcglc;
        scoreSheet.comment_gyzcglc = this.state.comment_gyzcglc;
        // 22 实验室与基地建设管理处、白马基地建设办公室
        scoreSheet.coreWork_sysyjdjsglc = this.state.coreWork_sysyjdjsglc; 
        scoreSheet.importantWork_sysyjdjsglc = this.state.importantWork_sysyjdjsglc;
        scoreSheet.comment_sysyjdjsglc = this.state.comment_sysyjdjsglc;
        // 23 白马校区建设指挥部
        scoreSheet.coreWork_bmxqjszhb = this.state.coreWork_bmxqjszhb; 
        scoreSheet.importantWork_bmxqjszhb = this.state.importantWork_bmxqjszhb;
        scoreSheet.comment_bmxqjszhb = this.state.comment_bmxqjszhb;
        // 24 基建处
        scoreSheet.coreWork_jjc = this.state.coreWork_jjc; 
        scoreSheet.importantWork_jjc = this.state.importantWork_jjc;
        scoreSheet.comment_jjc = this.state.comment_jjc;
        // 25 后勤管理处、后勤服务总公司、后勤党工委
        scoreSheet.coreWork_hqglc = this.state.coreWork_hqglc; 
        scoreSheet.importantWork_hqglc = this.state.importantWork_hqglc;
        scoreSheet.comment_hqglc = this.state.comment_hqglc;
        // 26 离退休工作处
        scoreSheet.coreWork_ltxgzc = this.state.coreWork_ltxgzc; 
        scoreSheet.importantWork_ltxgzc = this.state.importantWork_ltxgzc;
        scoreSheet.comment_ltxgzc = this.state.comment_ltxgzc;
        // 27 教学评估办公室、高等教育研究所
        scoreSheet.coreWork_jxpgbgs = this.state.coreWork_jxpgbgs; 
        scoreSheet.importantWork_jxpgbgs = this.state.importantWork_jxpgbgs;
        scoreSheet.comment_jxpgbgs = this.state.comment_jxpgbgs;
        // 28 网络安全和信息化办公室
        scoreSheet.coreWork_wlaqhxxhbgs = this.state.coreWork_wlaqhxxhbgs; 
        scoreSheet.importantWork_wlaqhxxhbgs = this.state.importantWork_wlaqhxxhbgs;
        scoreSheet.comment_wlaqhxxhbgs = this.state.comment_wlaqhxxhbgs;
        // 29 继续教育学院、应用技术学院
        scoreSheet.coreWork_jxjyxy = this.state.coreWork_jxjyxy; 
        scoreSheet.importantWork_jxjyxy = this.state.importantWork_jxjyxy;
        scoreSheet.comment_jxjyxy = this.state.comment_jxjyxy;
        // 30 国际教育学院
        scoreSheet.coreWork_gjjyxy = this.state.coreWork_gjjyxy; 
        scoreSheet.importantWork_gjjyxy = this.state.importantWork_gjjyxy;
        scoreSheet.comment_gjjyxy = this.state.comment_gjjyxy;
        // 31 图书馆
        scoreSheet.coreWork_tsg = this.state.coreWork_tsg; 
        scoreSheet.importantWork_tsg = this.state.importantWork_tsg;
        scoreSheet.comment_tsg = this.state.comment_tsg;
        // 32 期刊编辑部
        scoreSheet.coreWork_qkbjb = this.state.coreWork_qkbjb; 
        scoreSheet.importantWork_qkbjb = this.state.importantWork_qkbjb;
        scoreSheet.comment_qkbjb = this.state.comment_qkbjb;
        // 33 校友工作办公室、学校发展基金会秘书处
        scoreSheet.coreWork_xygzbgs = this.state.coreWork_xygzbgs; 
        scoreSheet.importantWork_xygzbgs = this.state.importantWork_xygzbgs;
        scoreSheet.comment_xygzbgs = this.state.comment_xygzbgs;
        // 34 资产经营公司
        scoreSheet.coreWork_zcjygs = this.state.coreWork_zcjygs; 
        scoreSheet.importantWork_zcjygs = this.state.importantWork_zcjygs;
        scoreSheet.comment_zcjygs = this.state.comment_zcjygs;
        // 35 博物馆（筹）、档案馆
        scoreSheet.coreWork_bwg = this.state.coreWork_bwg; 
        scoreSheet.importantWork_bwg = this.state.importantWork_bwg;
        scoreSheet.comment_bwg = this.state.comment_bwg;
        // 36 现代分析测试中心
        scoreSheet.coreWork_xdfxcszx = this.state.coreWork_xdfxcszx; 
        scoreSheet.importantWork_xdfxcszx = this.state.importantWork_xdfxcszx;
        scoreSheet.comment_xdfxcszx = this.state.comment_xdfxcszx;

        service.saveScoreSheet(scoreSheet);
      }
    }

    render() {
        return (
          <div>
            <h3>南京林业大学2022年度机关部门（单位）重要工作完成情况评分系统</h3>
            <Divider />
            <div style = {{display: "inline"}}>评分员工号：</div>
            <Input 
              disabled={this.state.scorerIdentified}
              style={{width: '100px'}}
              value={this.state.scorerEmployeeNumber}
              onChange={(e) => {
                console.log("评分人不变号变更为：" + e.target.value);
                this.setState({scorerEmployeeNumber: e.target.value});
              }}
            />
            <div style = {{display: "inline"}}>评分员密码：</div>
            <Input.Password 
              disabled={this.state.scorerIdentified}
              onChange={(e) => {
                console.log("评分人密码变更为：" + e.target.value);
                this.setState({scorerPassword: e.target.value});
              }}
              onBlur={this.loadScoreSheet}
              style={{width: '100px'}}
            />
            
            {this.state.scorerIdentified ? <CheckOutlined /> : "" }

            <div>{this.state.welcomeMessage}</div>

            {/* 1 党委办公室 */}
            <Divider />
            <div>1 党委办公室</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_dwbgs} 
              onChange={(value) => {
                console.log("党委办公室核心工作分数变更为：" + value);
                this.setState({coreWork_dwbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_dwbgs} 
              onChange={(value) => {
                console.log("党委办公室重点工作分数变更为：" + value);
                this.setState({importantWork_dwbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_dwbgs} 
              onChange={(e) => {
                console.log("党委办公室备注变更为：" + e.target.value);
                this.setState({comment_dwbgs: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            
            {/* 2 党委组织部、党校 */}
            <Divider />
            <div>2 党委组织部、党校</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_dwzzb} 
              onChange={(value) => {
                console.log("党委组织部核心工作分数变更为：" + value);
                this.setState({coreWork_dwzzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_dwzzb} 
              onChange={(value) => {
                console.log("党委组织部重点工作分数变更为：" + value);
                this.setState({importantWork_dwzzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_dwzzb} 
              onChange={(e) => {
                console.log("党委组织部备注变更为：" + e.target.value);
                this.setState({comment_dwzzb: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 3 党委宣传部、新闻中心、党委教师工作部 */}
            <Divider />
            <div>3 党委宣传部、新闻中心、党委教师工作部</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_dwxcb} 
              onChange={(value) => {
                console.log("党委宣传部核心工作分数变更为：" + value);
                this.setState({coreWork_dwxcb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_dwxcb} 
              onChange={(value) => {
                console.log("党委宣传部重点工作分数变更为：" + value);
                this.setState({importantWork_dwxcb: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_dwxcb} 
              onChange={(e) => {
                console.log("党委宣传部备注变更为：" + e.target.value);
                this.setState({comment_dwxcb: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 4 党委统战部 */}
            <Divider />
            <div>4 党委统战部</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_dwtzb} 
              onChange={(value) => {
                console.log("党委统战部核心工作分数变更为：" + value);
                this.setState({coreWork_dwtzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_dwtzb} 
              onChange={(value) => {
                console.log("党委统战部重点工作分数变更为：" + value);
                this.setState({importantWork_dwtzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_dwtzb} 
              onChange={(e) => {
                console.log("党委统战部备注变更为：" + e.target.value);
                this.setState({comment_dwtzb: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />
            
            {/* 5 纪检监察机构 */}
            <Divider />
            <div>5 纪检监察机构</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jjjcjg} 
              onChange={(value) => {
                console.log("纪检监察机构核心工作分数变更为：" + value);
                this.setState({coreWork_jjjcjg: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_jjjcjg} 
              onChange={(value) => {
                console.log("纪检监察机构分数变更为：" + value);
                this.setState({importantWork_jjjcjg: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_jjjcjg} 
              onChange={(e) => {
                console.log("纪检监察机构备注变更为：" + e.target.value);
                this.setState({comment_jjjcjg: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 6 学生工作部（处）、武装部、创新创业学院 done */}
            <Divider />
            <div>6 学生工作部（处）、武装部、创新创业学院</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xsgzb} 
              onChange={(value) => {
                console.log("学生工作部核心工作分数变更为：" + value);
                this.setState({coreWork_xsgzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_xsgzb} 
              onChange={(value) => {
                console.log("学生工作部分数变更为：" + value);
                this.setState({importantWork_xsgzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_xsgzb} 
              onChange={(e) => {
                console.log("学生工作部备注变更为：" + e.target.value);
                this.setState({comment_xsgzb: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 7 保卫部（处）done  */}
            <Divider />
            <div>7 保卫部（处）</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_bwb} 
              onChange={(value) => {
                console.log("保卫部（处）核心工作分数变更为：" + value);
                this.setState({coreWork_bwb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_bwb} 
              onChange={(value) => {
                console.log("保卫部（处）分数变更为：" + value);
                this.setState({importantWork_bwb: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_bwb} 
              onChange={(e) => {
                console.log("保卫部（处）备注变更为：" + e.target.value);
                this.setState({comment_bwb: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 8 校工会 done */}
            <Divider />
            <div>8 校工会</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xgh} 
              onChange={(value) => {
                console.log("校工会核心工作分数变更为：" + value);
                this.setState({coreWork_xgh: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_xgh} 
              onChange={(value) => {
                console.log("校工会分数变更为：" + value);
                this.setState({importantWork_xgh: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_xgh} 
              onChange={(e) => {
                console.log("校工会备注变更为：" + e.target.value);
                this.setState({comment_xgh: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 9 校团委 */}
            <Divider />
            <div>9 校团委</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xtw} 
              onChange={(value) => {
                console.log("校团委核心工作分数变更为：" + value);
                this.setState({coreWork_xtw: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_xtw} 
              onChange={(value) => {
                console.log("校团委分数变更为：" + value);
                this.setState({importantWork_xtw: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_xtw} 
              onChange={(e) => {
                console.log("校团委备注变更为：" + e.target.value);
                this.setState({comment_xtw: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 10 机关党委 */}
            <Divider />
            <div>10 机关党委</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jgdw} 
              onChange={(value) => {
                console.log("机关党委核心工作分数变更为：" + value);
                this.setState({coreWork_jgdw: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_jgdw} 
              onChange={(value) => {
                console.log("机关党委分数变更为：" + value);
                this.setState({importantWork_jgdw: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_jgdw} 
              onChange={(e) => {
                console.log("机关党委备注变更为：" + e.target.value);
                this.setState({comment_jgdw: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 11 校长办公室 */}
            <Divider />
            <div>11 校长办公室</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xzbgs} 
              onChange={(value) => {
                console.log("校长办公室核心工作分数变更为：" + value);
                this.setState({coreWork_xzbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_xzbgs} 
              onChange={(value) => {
                console.log("校长办公室分数变更为：" + value);
                this.setState({importantWork_xzbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_xzbgs} 
              onChange={(e) => {
                console.log("校长办公室备注变更为：" + e.target.value);
                this.setState({comment_xzbgs: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

 
            {/* 12 发展规划与学科建设处、“双一流”建设办公室（林学学部、林业工程学部） */}
            <Divider />
            <div>12 发展规划与学科建设处、“双一流”建设办公室</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_fzghyxkjsc} 
              onChange={(value) => {
                console.log("发展规划与学科建设处核心工作分数变更为：" + value);
                this.setState({coreWork_fzghyxkjsc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_fzghyxkjsc} 
              onChange={(value) => {
                console.log("发展规划与学科建设处分数变更为：" + value);
                this.setState({importantWork_fzghyxkjsc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_fzghyxkjsc} 
              onChange={(e) => {
                console.log("发展规划与学科建设处备注变更为：" + e.target.value);
                this.setState({comment_fzghyxkjsc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 13 教务处、教师教学发展中心 */}
            <Divider />
            <div>13 教务处、教师教学发展中心</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jwc} 
              onChange={(value) => {
                console.log("教务处核心工作分数变更为：" + value);
                this.setState({coreWork_jwc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_jwc} 
              onChange={(value) => {
                console.log("教务处分数变更为：" + value);
                this.setState({importantWork_jwc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_jwc} 
              onChange={(e) => {
                console.log("教务处备注变更为：" + e.target.value);
                this.setState({comment_jwc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 14 科技处、科技开发服务部、军工项目办 */}
            <Divider />
            <div>14 科技处、科技开发服务部、军工项目办</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_kjc} 
              onChange={(value) => {
                console.log("科技处核心工作分数变更为：" + value);
                this.setState({coreWork_kjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_kjc} 
              onChange={(value) => {
                console.log("科技处分数变更为：" + value);
                this.setState({importantWork_kjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_kjc} 
              onChange={(e) => {
                console.log("科技处备注变更为：" + e.target.value);
                this.setState({comment_kjc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


 
            {/* 15 人文社科处 */}
            <Divider />
            <div>15 人文社科处</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_rwskc} 
              onChange={(value) => {
                console.log("人文社科处核心工作分数变更为：" + value);
                this.setState({coreWork_rwskc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_rwskc} 
              onChange={(value) => {
                console.log("人文社科处分数变更为：" + value);
                this.setState({importantWork_rwskc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_rwskc} 
              onChange={(e) => {
                console.log("人文社科处备注变更为：" + e.target.value);
                this.setState({comment_rwskc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 16 研究生院、研究生工作部 */}
            <Divider />
            <div>16 研究生院、研究生工作部</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_yjsy} 
              onChange={(value) => {
                console.log("研究生院核心工作分数变更为：" + value);
                this.setState({coreWork_yjsy: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_yjsy} 
              onChange={(value) => {
                console.log("研究生院分数变更为：" + value);
                this.setState({importantWork_yjsy: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_yjsy} 
              onChange={(e) => {
                console.log("研究生院备注变更为：" + e.target.value);
                this.setState({comment_yjsy: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 17 国际合作处、港澳台事务办公室 */}
            <Divider />
            <div>17 国际合作处、港澳台事务办公室</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_gjhzc} 
              onChange={(value) => {
                console.log("国际合作处核心工作分数变更为：" + value);
                this.setState({coreWork_gjhzc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_gjhzc} 
              onChange={(value) => {
                console.log("国际合作处分数变更为：" + value);
                this.setState({importantWork_gjhzc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_gjhzc} 
              onChange={(e) => {
                console.log("国际合作处备注变更为：" + e.target.value);
                this.setState({comment_gjhzc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 18 人事处、高层次人才服务办公室 */}
            <Divider />
            <div>18 人事处、高层次人才服务办公室</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_rsc} 
              onChange={(value) => {
                console.log("人事处核心工作分数变更为：" + value);
                this.setState({coreWork_rsc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_rsc} 
              onChange={(value) => {
                console.log("人事处分数变更为：" + value);
                this.setState({importantWork_rsc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_rsc} 
              onChange={(e) => {
                console.log("人事处备注变更为：" + e.target.value);
                this.setState({comment_rsc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 19 审计处 */}
            <Divider />
            <div>19 审计处</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_sjc} 
              onChange={(value) => {
                console.log("审计处核心工作分数变更为：" + value);
                this.setState({coreWork_sjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_sjc} 
              onChange={(value) => {
                console.log("审计处分数变更为：" + value);
                this.setState({importantWork_sjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_sjc} 
              onChange={(e) => {
                console.log("审计处备注变更为：" + e.target.value);
                this.setState({comment_sjc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 20 财务处 */}
            <Divider />
            <div>20 财务处</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_cwc} 
              onChange={(value) => {
                console.log("财务处核心工作分数变更为：" + value);
                this.setState({coreWork_cwc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_cwc} 
              onChange={(value) => {
                console.log("财务处分数变更为：" + value);
                this.setState({importantWork_cwc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_cwc} 
              onChange={(e) => {
                console.log("财务处备注变更为：" + e.target.value);
                this.setState({comment_cwc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 21 国有资产管理处 */}
            <Divider />
            <div>21 国有资产管理处</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_gyzcglc} 
              onChange={(value) => {
                console.log("国有资产管理处核心工作分数变更为：" + value);
                this.setState({coreWork_gyzcglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_gyzcglc} 
              onChange={(value) => {
                console.log("国有资产管理处分数变更为：" + value);
                this.setState({importantWork_gyzcglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_gyzcglc} 
              onChange={(e) => {
                console.log("国有资产管理处备注变更为：" + e.target.value);
                this.setState({comment_gyzcglc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 22 实验室与基地建设管理处、白马基地建设办公室 */}
            <Divider />
            <div>22 实验室与基地建设管理处、白马基地建设办公室</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_sysyjdjsglc} 
              onChange={(value) => {
                console.log("实验室与基地建设管理处 核心工作分数变更为：" + value);
                this.setState({coreWork_sysyjdjsglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_sysyjdjsglc} 
              onChange={(value) => {
                console.log("实验室与基地建设管理处 重要工作分数变更为：" + value);
                this.setState({importantWork_sysyjdjsglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_sysyjdjsglc} 
              onChange={(e) => {
                console.log("实验室与基地建设管理处 备注变更为：" + e.target.value);
                this.setState({comment_sysyjdjsglc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 23 白马校区建设指挥部 */}
            <Divider />
            <div>23 白马校区建设指挥部</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_bmxqjszhb} 
              onChange={(value) => {
                console.log("白马校区建设指挥部 核心工作分数变更为：" + value);
                this.setState({coreWork_bmxqjszhb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_bmxqjszhb} 
              onChange={(value) => {
                console.log("白马校区建设指挥部 重要工作分数变更为：" + value);
                this.setState({importantWork_bmxqjszhb: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_bmxqjszhb} 
              onChange={(e) => {
                console.log("白马校区建设指挥部 备注变更为：" + e.target.value);
                this.setState({comment_bmxqjszhb: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 24 基建处 */}
            <Divider />
            <div>24 基建处</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jjc} 
              onChange={(value) => {
                console.log("基建处 核心工作分数变更为：" + value);
                this.setState({coreWork_jjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_jjc} 
              onChange={(value) => {
                console.log("基建处 重要工作分数变更为：" + value);
                this.setState({importantWork_jjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_jjc} 
              onChange={(e) => {
                console.log("基建处 备注变更为：" + e.target.value);
                this.setState({comment_jjc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 25 后勤管理处、后勤服务总公司、后勤党工委 */}
            <Divider />
            <div>25 后勤管理处、后勤服务总公司</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_hqglc} 
              onChange={(value) => {
                console.log("后勤管理处 核心工作分数变更为：" + value);
                this.setState({coreWork_hqglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_hqglc} 
              onChange={(value) => {
                console.log("后勤管理处 重要工作分数变更为：" + value);
                this.setState({importantWork_hqglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_hqglc} 
              onChange={(e) => {
                console.log("后勤管理处 备注变更为：" + e.target.value);
                this.setState({comment_hqglc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 26 离退休工作处 */}
            <Divider />
            <div>26 离退休工作处</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_ltxgzc} 
              onChange={(value) => {
                console.log("离退休工作处 核心工作分数变更为：" + value);
                this.setState({coreWork_ltxgzc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_ltxgzc} 
              onChange={(value) => {
                console.log("离退休工作处 重要工作分数变更为：" + value);
                this.setState({importantWork_ltxgzc: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_ltxgzc} 
              onChange={(e) => {
                console.log("离退休工作处 备注变更为：" + e.target.value);
                this.setState({comment_ltxgzc: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 27 教学评估办公室、高等教育研究所 */}
            <Divider />
            <div>27 教学评估办公室、高等教育研究所</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jxpgbgs} 
              onChange={(value) => {
                console.log("教学评估办公室 核心工作分数变更为：" + value);
                this.setState({coreWork_jxpgbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_jxpgbgs} 
              onChange={(value) => {
                console.log("教学评估办公室 重要工作分数变更为：" + value);
                this.setState({importantWork_jxpgbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_jxpgbgs} 
              onChange={(e) => {
                console.log("教学评估办公室 备注变更为：" + e.target.value);
                this.setState({comment_jxpgbgs: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 28 网络安全和信息化办公室 */}
            <Divider />
            <div>28 网络安全和信息化办公室</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_wlaqhxxhbgs} 
              onChange={(value) => {
                console.log("网络安全和信息化办公室 核心工作分数变更为：" + value);
                this.setState({coreWork_wlaqhxxhbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_wlaqhxxhbgs} 
              onChange={(value) => {
                console.log("网络安全和信息化办公室 重要工作分数变更为：" + value);
                this.setState({importantWork_wlaqhxxhbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_wlaqhxxhbgs} 
              onChange={(e) => {
                console.log("网络安全和信息化办公室 备注变更为：" + e.target.value);
                this.setState({comment_wlaqhxxhbgs: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />



            {/* 29 继续教育学院、应用技术学院 */}
            <Divider />
            <div>29 继续教育学院、应用技术学院</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jxjyxy} 
              onChange={(value) => {
                console.log("继续教育学院 核心工作分数变更为：" + value);
                this.setState({coreWork_jxjyxy: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_jxjyxy} 
              onChange={(value) => {
                console.log("继续教育学院 重要工作分数变更为：" + value);
                this.setState({importantWork_jxjyxy: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_jxjyxy} 
              onChange={(e) => {
                console.log("继续教育学院 备注变更为：" + e.target.value);
                this.setState({comment_jxjyxy: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 30 国际教育学院 */}
            <Divider />
            <div>30 国际教育学院</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_gjjyxy} 
              onChange={(value) => {
                console.log("国际教育学院 核心工作分数变更为：" + value);
                this.setState({coreWork_gjjyxy: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_gjjyxy} 
              onChange={(value) => {
                console.log("国际教育学院 重要工作分数变更为：" + value);
                this.setState({importantWork_gjjyxy: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_gjjyxy} 
              onChange={(e) => {
                console.log("国际教育学院 备注变更为：" + e.target.value);
                this.setState({comment_gjjyxy: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 31 图书馆 */}
            <Divider />
            <div>31 图书馆</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_tsg} 
              onChange={(value) => {
                console.log("图书馆 核心工作分数变更为：" + value);
                this.setState({coreWork_tsg: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_tsg} 
              onChange={(value) => {
                console.log("图书馆 重要工作分数变更为：" + value);
                this.setState({importantWork_tsg: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_tsg} 
              onChange={(e) => {
                console.log("图书馆 备注变更为：" + e.target.value);
                this.setState({comment_tsg: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />



 
            {/* 32 期刊编辑部 */}
            <Divider />
            <div>32 期刊编辑部</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_qkbjb} 
              onChange={(value) => {
                console.log("期刊编辑部 核心工作分数变更为：" + value);
                this.setState({coreWork_qkbjb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_qkbjb} 
              onChange={(value) => {
                console.log("期刊编辑部 重要工作分数变更为：" + value);
                this.setState({importantWork_qkbjb: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_qkbjb} 
              onChange={(e) => {
                console.log("期刊编辑部 备注变更为：" + e.target.value);
                this.setState({comment_qkbjb: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />



 
            {/* 33 校友工作办公室、学校发展基金会秘书处 */}
            <Divider />
            <div>33 校友工作办公室、学校发展基金会秘书处</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xygzbgs} 
              onChange={(value) => {
                console.log("校友工作办公室、学校发展基金会秘书处 核心工作分数变更为：" + value);
                this.setState({coreWork_xygzbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_xygzbgs} 
              onChange={(value) => {
                console.log("校友工作办公室、学校发展基金会秘书处 重要工作分数变更为：" + value);
                this.setState({importantWork_xygzbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_xygzbgs} 
              onChange={(e) => {
                console.log("校友工作办公室、学校发展基金会秘书处 备注变更为：" + e.target.value);
                this.setState({comment_xygzbgs: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />



 
            {/* 34 资产经营公司 */}
            <Divider />
            <div>34 资产经营公司</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_zcjygs} 
              onChange={(value) => {
                console.log("资产经营公司 核心工作分数变更为：" + value);
                this.setState({coreWork_zcjygs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_zcjygs} 
              onChange={(value) => {
                console.log("资产经营公司 重要工作分数变更为：" + value);
                this.setState({importantWork_zcjygs: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_zcjygs} 
              onChange={(e) => {
                console.log("资产经营公司 备注变更为：" + e.target.value);
                this.setState({comment_zcjygs: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            {/* 35 博物馆（筹）、档案馆 */}
            <Divider />
            <div>35 博物馆（筹）、档案馆</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_bwg} 
              onChange={(value) => {
                console.log("博物馆（筹）、档案馆 核心工作分数变更为：" + value);
                this.setState({coreWork_bwg: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_bwg} 
              onChange={(value) => {
                console.log("博物馆（筹）、档案馆 重要工作分数变更为：" + value);
                this.setState({importantWork_bwg: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_bwg} 
              onChange={(e) => {
                console.log("博物馆（筹）、档案馆 备注变更为：" + e.target.value);
                this.setState({comment_bwg: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />


            {/* 36 现代分析测试中心 */}
            <Divider />
            <div>36 现代分析测试中心</div>
            <div style = {{display: "inline"}}>核心工作（30分）：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xdfxcszx} 
              onChange={(value) => {
                console.log("现代分析测试中心 核心工作分数变更为：" + value);
                this.setState({coreWork_xdfxcszx: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作（20分）：</div>
            <InputNumber min={0} max={20} 
              value={this.state.importantWork_xdfxcszx} 
              onChange={(value) => {
                console.log("现代分析测试中心 重要工作分数变更为：" + value);
                this.setState({importantWork_xdfxcszx: value, });
              }}
            />
            <div style = {{display: "inline"}}>备注：</div>
            <Input style={{width: '300px'}}
              value={this.state.comment_xdfxcszx} 
              onChange={(e) => {
                console.log("现代分析测试中心 备注变更为：" + e.target.value);
                this.setState({comment_xdfxcszx: e.target.value, });
              }} />
            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
            <Divider />

            <Button onClick={this.saveScoreSheet} type="primary">保存</Button>
          </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));