import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { Card,Button,List, message } from 'antd'
import {ArrowLeftOutlined} from '@ant-design/icons'
import {PRIMARY} from '../../../config'
import {reqProdById} from '../../../api'
import './index.scss'

function Detail(props) {
  
  const [prod_info,setProd_info] = useState({})
  const navigate = useNavigate()
  const param = useParams()
  // 请求
  async function getProdById(id){
    let result =await reqProdById(id)
    const {code,data} = result
    if(code===0){
      setProd_info(data)
    }else{
      message.error('获取数据失败')
    }
  }

  useEffect(()=>{
    if(props.productList){
        const info = props.productList.find((item)=>{
        return String(item._id)===param.id
      })
      setProd_info(info)
    }else{
      getProdById(param.id)
    }
  },[])
  const data = [
    {name:'商品名称',content:prod_info.name},
    {name:'商品描述',content:prod_info.desc},
    {name:'商品价格',content:'￥'+prod_info.price},
    {name:'所属分类',content:prod_info.categoryid},
    {name:'商品图片',content:<img className='img' src={prod_info.imgs?'http://localhost:4000/upload/'+prod_info.imgs:''}></img>},
    {name:'商品详情',content:prod_info.detail}
  ];
  return (
    <Card className='detail' title={
      <div className='left_title'>
        <Button type='link' className='left_button' onClick={()=>{navigate(-1)}}>
          <ArrowLeftOutlined style={{color:PRIMARY}} />
        </Button>
        <span>
          商品详情
        </span>
      </div>
    }>
     <List
      bordered
      // split
      dataSource={data}
      renderItem={(item) => (
        <div>
          <List.Item >
          <div className='prod_item'>
          <span className='prod_name'>{item.name}：</span>{
            typeof item.content === 'object'?<span className='prod_content'>{item.content}</span>:
            <span className='prod_content' dangerouslySetInnerHTML={{__html:item.content}}></span>
          }
          </div>
        </List.Item>
        </div>
        
        
      )}
    />
    </Card>
  )
}

export default  connect(
  state => ({productList:state.productList}),
  {}
)(Detail)
