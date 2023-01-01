import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider, Input, InputNumber } from 'antd';

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
        this.setState({welcomeMessage: "欢迎用户" + "" + "使用南林机关部门（单位）重要工作完成情况评分系统。"});
    }

    saveScoreSheet() {
        console.log("正在保存评分表。" + JSON.stringify(this.state));
    }

    render() {
        return (
          <div>
            <Divider />
            <div style = {{display: "inline"}}>评分人工号：</div>
            <Input 
              style={{width: '100px'}}
              value={this.state.scorerEmployeeNumber}
              onChange={(e) => {
                console.log("评分人不变号变更为：" + e.target.value);
                this.setState({scorerEmployeeNumber: e.target.value});
              }}
            />
            <div style = {{display: "inline"}}>评分人密码：</div>
            <Input.Password 
              onChange={(e) => {
                console.log("评分人密码变更为：" + e.target.value);
                this.setState({scorerPassword: e.target.value});
              }}
              onBlur={this.loadScoreSheet}
              style={{width: '100px'}}
            />
            <div>{this.state.welcomeMessage}</div>

            {/* 1 党委办公室 */}
            <Divider />
            <div>1 党委办公室</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_dwbgs} 
              onChange={(value) => {
                console.log("党委办公室核心工作分数变更为：" + value);
                this.setState({coreWork_dwbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />

            
            {/* 2 党委组织部、党校 */}
            <Divider />
            <div>2 党委组织部、党校</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_dwzzb} 
              onChange={(value) => {
                console.log("党委组织部核心工作分数变更为：" + value);
                this.setState({coreWork_dwzzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


            
            {/* 3 党委宣传部、新闻中心、党委教师工作部 */}
            <Divider />
            <div>3 党委宣传部、新闻中心、党委教师工作部</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_dwxcb} 
              onChange={(value) => {
                console.log("党委宣传部核心工作分数变更为：" + value);
                this.setState({coreWork_dwxcb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />

            
            {/* 4 党委统战部 */}
            <Divider />
            <div>4 党委统战部</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_dwtzb} 
              onChange={(value) => {
                console.log("党委统战部核心工作分数变更为：" + value);
                this.setState({coreWork_dwtzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />
            
            {/* 5 纪检监察机构 */}
            <Divider />
            <div>5 纪检监察机构</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jjjcjg} 
              onChange={(value) => {
                console.log("纪检监察机构核心工作分数变更为：" + value);
                this.setState({coreWork_jjjcjg: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />

 
            {/* 6 学生工作部（处）、武装部、创新创业学院 done */}
            <Divider />
            <div>6 学生工作部（处）、武装部、创新创业学院</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xsgzb} 
              onChange={(value) => {
                console.log("学生工作部核心工作分数变更为：" + value);
                this.setState({coreWork_xsgzb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 7 保卫部（处）done  */}
            <Divider />
            <div>7 保卫部（处）</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_bwb} 
              onChange={(value) => {
                console.log("保卫部（处）核心工作分数变更为：" + value);
                this.setState({coreWork_bwb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 8 校工会 done */}
            <Divider />
            <div>8 校工会</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xgh} 
              onChange={(value) => {
                console.log("校工会核心工作分数变更为：" + value);
                this.setState({coreWork_xgh: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 9 校团委 */}
            <Divider />
            <div>9 校团委</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xtw} 
              onChange={(value) => {
                console.log("校团委核心工作分数变更为：" + value);
                this.setState({coreWork_xtw: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 10 机关党委 */}
            <Divider />
            <div>10 机关党委</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jgdw} 
              onChange={(value) => {
                console.log("机关党委核心工作分数变更为：" + value);
                this.setState({coreWork_jgdw: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 11 校长办公室 */}
            <Divider />
            <div>11 校长办公室</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xzbgs} 
              onChange={(value) => {
                console.log("校长办公室核心工作分数变更为：" + value);
                this.setState({coreWork_xzbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 12 发展规划与学科建设处、“双一流”建设办公室（林学学部、林业工程学部） */}
            <Divider />
            <div>12 发展规划与学科建设处、“双一流”建设办公室（林学学部、林业工程学部）</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_fzghyxkjsc} 
              onChange={(value) => {
                console.log("发展规划与学科建设处核心工作分数变更为：" + value);
                this.setState({coreWork_fzghyxkjsc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 13 教务处、教师教学发展中心 */}
            <Divider />
            <div>13 教务处、教师教学发展中心</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jwc} 
              onChange={(value) => {
                console.log("教务处核心工作分数变更为：" + value);
                this.setState({coreWork_jwc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 14 科技处、科技开发服务部、军工项目办 */}
            <Divider />
            <div>14 科技处、科技开发服务部、军工项目办</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_kjc} 
              onChange={(value) => {
                console.log("科技处核心工作分数变更为：" + value);
                this.setState({coreWork_kjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 15 人文社科处 */}
            <Divider />
            <div>15 人文社科处</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_rwskc} 
              onChange={(value) => {
                console.log("人文社科处核心工作分数变更为：" + value);
                this.setState({coreWork_rwskc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 16 研究生院、研究生工作部 */}
            <Divider />
            <div>16 研究生院、研究生工作部</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_yjsy} 
              onChange={(value) => {
                console.log("研究生院核心工作分数变更为：" + value);
                this.setState({coreWork_yjsy: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 17 国际合作处、港澳台事务办公室 */}
            <Divider />
            <div>17 国际合作处、港澳台事务办公室</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_gjhzc} 
              onChange={(value) => {
                console.log("国际合作处核心工作分数变更为：" + value);
                this.setState({coreWork_gjhzc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 18 人事处、高层次人才服务办公室 */}
            <Divider />
            <div>18 人事处、高层次人才服务办公室</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_rsc} 
              onChange={(value) => {
                console.log("人事处核心工作分数变更为：" + value);
                this.setState({coreWork_rsc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 19 审计处 */}
            <Divider />
            <div>19 审计处</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_sjc} 
              onChange={(value) => {
                console.log("审计处核心工作分数变更为：" + value);
                this.setState({coreWork_sjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 20 财务处 */}
            <Divider />
            <div>20 财务处</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_cwc} 
              onChange={(value) => {
                console.log("财务处核心工作分数变更为：" + value);
                this.setState({coreWork_cwc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 21 国有资产管理处 */}
            <Divider />
            <div>21 国有资产管理处</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_gyzcglc} 
              onChange={(value) => {
                console.log("国有资产管理处核心工作分数变更为：" + value);
                this.setState({coreWork_gyzcglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 22 实验室与基地建设管理处、白马基地建设办公室 */}
            <Divider />
            <div>22 实验室与基地建设管理处、白马基地建设办公室</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_sysyjdjsglc} 
              onChange={(value) => {
                console.log("实验室与基地建设管理处 核心工作分数变更为：" + value);
                this.setState({coreWork_sysyjdjsglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 23 白马校区建设指挥部 */}
            <Divider />
            <div>23 白马校区建设指挥部</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_bmxqjszhb} 
              onChange={(value) => {
                console.log("白马校区建设指挥部 核心工作分数变更为：" + value);
                this.setState({coreWork_bmxqjszhb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 24 基建处 */}
            <Divider />
            <div>24 基建处</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jjc} 
              onChange={(value) => {
                console.log("基建处 核心工作分数变更为：" + value);
                this.setState({coreWork_jjc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 25 后勤管理处、后勤服务总公司、后勤党工委 */}
            <Divider />
            <div>25 后勤管理处、后勤服务总公司、后勤党工委</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_hqglc} 
              onChange={(value) => {
                console.log("后勤管理处 核心工作分数变更为：" + value);
                this.setState({coreWork_hqglc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 26 离退休工作处 */}
            <Divider />
            <div>26 离退休工作处</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_ltxgzc} 
              onChange={(value) => {
                console.log("离退休工作处 核心工作分数变更为：" + value);
                this.setState({coreWork_ltxgzc: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 27 教学评估办公室、高等教育研究所 */}
            <Divider />
            <div>27 教学评估办公室、高等教育研究所</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jxpgbgs} 
              onChange={(value) => {
                console.log("教学评估办公室 核心工作分数变更为：" + value);
                this.setState({coreWork_jxpgbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 28 网络安全和信息化办公室 */}
            <Divider />
            <div>28 网络安全和信息化办公室</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_wlaqhxxhbgs} 
              onChange={(value) => {
                console.log("网络安全和信息化办公室 核心工作分数变更为：" + value);
                this.setState({coreWork_wlaqhxxhbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />




 
            {/* 29 继续教育学院、应用技术学院 */}
            <Divider />
            <div>29 继续教育学院、应用技术学院</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_jxjyxy} 
              onChange={(value) => {
                console.log("继续教育学院 核心工作分数变更为：" + value);
                this.setState({coreWork_jxjyxy: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />




 
            {/* 30 国际教育学院 */}
            <Divider />
            <div>30 国际教育学院</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_gjjyxy} 
              onChange={(value) => {
                console.log("国际教育学院 核心工作分数变更为：" + value);
                this.setState({coreWork_gjjyxy: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 31 图书馆 */}
            <Divider />
            <div>31 图书馆</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_tsg} 
              onChange={(value) => {
                console.log("图书馆 核心工作分数变更为：" + value);
                this.setState({coreWork_tsg: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 32 期刊编辑部 */}
            <Divider />
            <div>32 期刊编辑部</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_qkbjb} 
              onChange={(value) => {
                console.log("期刊编辑部 核心工作分数变更为：" + value);
                this.setState({coreWork_qkbjb: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 33 校友工作办公室、学校发展基金会秘书处 */}
            <Divider />
            <div>33 校友工作办公室、学校发展基金会秘书处</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xygzbgs} 
              onChange={(value) => {
                console.log("校友工作办公室、学校发展基金会秘书处 核心工作分数变更为：" + value);
                this.setState({coreWork_xygzbgs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 34 资产经营公司 */}
            <Divider />
            <div>34 资产经营公司</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_zcjygs} 
              onChange={(value) => {
                console.log("资产经营公司 核心工作分数变更为：" + value);
                this.setState({coreWork_zcjygs: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />


 
            {/* 35 博物馆（筹）、档案馆 */}
            <Divider />
            <div>35 博物馆（筹）、档案馆</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_bwg} 
              onChange={(value) => {
                console.log("博物馆（筹）、档案馆 核心工作分数变更为：" + value);
                this.setState({coreWork_bwg: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



 
            {/* 36 现代分析测试中心 */}
            <Divider />
            <div>36 现代分析测试中心</div>
            <div style = {{display: "inline"}}>核心工作：</div>
            <InputNumber min={0}  max={30} 
              value={this.state.coreWork_xdfxcszx} 
              onChange={(value) => {
                console.log("现代分析测试中心 核心工作分数变更为：" + value);
                this.setState({coreWork_xdfxcszx: value, });
              }}
            />
            <div style = {{display: "inline"}}>重点工作：</div>
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
            <Divider />



            <Button onClick={this.saveScoreSheet}>保存</Button>
          </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));