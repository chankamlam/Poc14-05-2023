import userEvent from "@testing-library/user-event";
import { makeAutoObservable, toJS,runInAction } from "mobx"
import url from "../common/url"


class Store {
    user = {
        listModel:{
            columns : [
                {
                    title: 'ID',
                    dataIndex: 'key',
                    // sorter: (a, b) => a.age - b.age,
                },
                {
                  title: 'UserName',
                  dataIndex: 'userName',
                },
                {
                  title: 'Card Number',
                  dataIndex: 'cardNum',
                },
                {
                  title: 'Card Image',
                  dataIndex: 'cardImg',
                },
                {
                    title: 'Created Time',
                    dataIndex: 'create_at',
                },
                {
                    title: 'Updated Time',
                    dataIndex: 'update_at',
                },
            ],
            operations : [],
            data : [],
            query : [
                {
                    key:4,
                    type:'RANGEPICKER',
                    title:'Created Time',
                    name:'date',
                },
                {
                    key:5,
                    type:'RANGEPICKER',
                    title:'Update Time',
                    name:'date',
                },
                {
                    key:1,
                    type:'INPUT',
                    title:'Name',
                    name:'name',
                },
                {
                    key:2,
                    type:'INPUT',
                    title:'Card Number',
                    name:'cardNum',
                },
            ],
            index:0
        },
    }

    


    constructor() {
        makeAutoObservable(this)
        const loadData = async()=>{

            await fetch(url.USERS_URL, {
                method: "GET", // or 'PUT'
                mode: 'cors',
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((res) => {
                res.json().then((data) => {
                    runInAction(()=>{
                        for (let i = 0; i < data.data.length; i++) {
                            const d = data.data[i]
                            this.user.listModel.data.push({
                                key:d.id,
                                userName:d.name,
                                cardNum:d.id_card_number,
                                cardImg:d.id_card_url,
                                create_at:d.create_at,
                                update_at:d.update_at
                            })
                        }
                    })
                    console.log(toJS(this.user.listModel.data))
                });
              });
        }
        loadData()
    }

}

export default Store;