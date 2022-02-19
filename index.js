

const get_posts = async()=>{
    const response = await fetch('http://localhost:3000/posts')
    const posts = await response.json();

    //use for of loop

    for (post of posts) {
    //    ` <tr id=${id}>
    //         <td>{title}</td>
    //         <td>{body} </td>
    //         <td><button>DEL</button></td>
    //         <td><button>UPD</button></td>
    //     </tr>`
    // {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //   }
        // destructure
        const {id,title,body} = post;
        // create tr elem
        const tr = document.createElement('tr')
        tr.id = id;

        // <td>{title}</td>
        const td_title = document.createElement('td');
        td_title.innerHTML = title;

        // <td>{body} </td>
        const td_body = document.createElement('td')
        td_body.innerHTML = body;

        // <td><button>DEL</button></td>
        const td_del = document.createElement('td')
        const btn_del = document.createElement('button')
        btn_del.innerHTML = "DEL"
        btn_del.onclick = async(e)=>{
            //delete request
            const response = await fetch(`http://localhost:3000/posts/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if (response.status == 200) {
                location.reload()
            }
        }

        td_del.appendChild(btn_del)

        // <td><button>UPD</button></td>
        const td_upd = document.createElement('td')
        const btn_upd = document.createElement('button')
        btn_upd.innerHTML = "UPD";
        btn_upd.onclick = (e)=>{
            location.replace('/update.html')
        }   
        td_upd.appendChild(btn_upd)
        
        
//     <tr id=${id}>
//         <td>{title}</td>
//         <td>{body} </td>
//         <td><button>DEL</button></td>
//         <td><button>UPD</button></td>
//     </tr>
        tr.appendChild(td_title)
        tr.appendChild(td_body)
        tr.appendChild(td_del)
        tr.appendChild(td_upd)


        document.getElementById('tbl').appendChild(tr)

    }
    
}

get_posts()


