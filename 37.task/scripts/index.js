const categories = document.getElementById('categories_list')
const product = document.getElementById('product')
const product_list = document.getElementById('product_list')
const product_item = document.getElementById('item')

const form_container = document.getElementById('form_container')

const tables = [
	'./images/table/table1.jpg', 
	'./images/table/table2.jpg', 
	'./images/table/table3.jpg'
]

const sofas = [
	'./images/sofa/sofa1.jpg', 
	'./images/sofa/sofa2.jpg',
	'./images/sofa/sofa3.jpg',
]

let values = [];

//card_container
let divItem = document.createElement('div')
item.appendChild(divItem)
const imgItem = document.createElement('img')
divItem.appendChild(imgItem)

//block for buttons in card
let span_btn = document.createElement('span')
span_btn.setAttribute('class', 'btn_save_buy')
divItem.appendChild(span_btn)
	
//buy_item
const button_buy = document.createElement('button')
button_buy.setAttribute('class', 'btn_buy')
button_buy.style.display = 'none'
span_btn.appendChild(button_buy)
button_buy.innerHTML = 'buy'

//save_item 
const button_save = document.createElement('button')
button_save.setAttribute('class', 'btn_save')
button_save.style.display = 'none'
span_btn.appendChild(button_save)
button_save.innerHTML = 'Save'

const ordered_items = []

function showProducts(values) {
	product_list.innerHTML = ""
	values.forEach(e => {
		let li = document.createElement('li');
		product_list.appendChild(li);
		const img = document.createElement('img');
		img.src = e;
		 li.appendChild(img);
		 img.innerHTML = e;

		img.onclick = function showItems(img) {
		 	item.style.display = 'block';
		 	imgItem.src = e;
		 	imgItem.innerHTML = e;
		 	button_buy.style.display = 'block';
		 	button_buy.onclick = function clickButton() { 
				const popup = document.getElementById('popup').classList.add('open') 
		}

		button_save.style.display = 'block';
			button_save.onclick = function clickButton() {  
				ordered_items.push(imgItem.src)
				const ordered_res = JSON.stringify(ordered_items)
				const date = new Date()
				const date_str = date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
				const local = localStorage.setItem('image', ordered_res)
				const local_date = localStorage.setItem('date', date_str)
			}
		}
	})
}

categories.onclick = function clickCategory(event) {
	let category = event.target.closest('li').id
	if(category === "sofa") { 
		item.style.display = 'none'
		showProducts(sofas)
	} else if (category === "table") {
		product_list.classList.toggle('hidden');
		item.style.display = 'none'
		showProducts(tables)
	}
}
 
order.addEventListener('click', () => {
	if(order) {
		categories.style.display = 'none'
		product_list.style.display = 'none'
		product_item.style.display = 'none'
		button_buy.style.display = 'none'
		button_save.style.display = 'none'
	}
	const get_items = localStorage.getItem('image')
	const ordered_items = JSON.parse(get_items)
	for(let i = 0;  i < ordered_items.length; i++) {
		const get_date = localStorage.getItem('date')
		const span_date = document.createElement('span');
		span_date.setAttribute('id', 'span_date')
		span_date.innerHTML = get_date
		product.append(span_date)
		const img_order = document.createElement('img');
		img_order.setAttribute('id', 'img_order')
		const items = ordered_items[i]
		img_order.src = items
		product.append(img_order)

		const button_delete_item = document.createElement('button')
		button_delete_item.innerHTML = 'DELETE'
		product.appendChild(button_delete_item)

		button_delete_item.onclick = function() {
			const local_get = localStorage.removeItem('image')
			const remove_date = localStorage.removeItem('date')
			span_date.style.display = 'none'
			document.getElementById('img_order').style.display = 'none'
			product.removeChild(button_delete_item) 
		}
	}
})