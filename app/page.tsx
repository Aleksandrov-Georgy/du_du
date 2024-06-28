import { Container, Filters, ProductCard, ProductGroupList, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar/>
      <Container className="mt-9 pb-14">
        <div className="flex gap-[80px]">
          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList 
              title='Пиццы'
              items={[
                {
                  id: 1, 
                  name: 'Чизбургер пицца', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                  price: 550, 
                  items: [{price: 550}]
                },
                {
                  id: 2, 
                  name: 'Чизбургер пицца', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                  price: 550, 
                  items: [{price: 550}]
                }, 
                 {
                  id: 3, 
                  name: 'Чизбургер пицца', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                  price: 550, 
                  items: [{price: 550}]
                }
                , 
                 {
                  id: 4, 
                  name: 'Чизбургер пицца', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                  price: 550, 
                  items: [{price: 550}]
                }, 
                {
                 id: 5, 
                 name: 'Чизбургер пицца', 
                 imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                 price: 550, 
                 items: [{price: 550}]
               }, 
               {
                id: 6, 
                name: 'Чизбургер пицца', 
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                price: 550, 
                items: [{price: 550}]
              }, 
              {
               id: 7, 
               name: 'Чизбургер пицца', 
               imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
               price: 550, 
               items: [{price: 550}]
             }
                ]}
                categoryId={1} />
                <ProductGroupList 
                  title='Комбо' 
                  categoryId={2} 
                  items={[
                    {
                      id: 1, 
                      name: 'Чизбургер пицца', 
                      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                      price: 550, 
                      items: [{price: 550}]
                    },
                    {
                      id: 2, 
                      name: 'Чизбургер пицца', 
                      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                      price: 550, 
                      items: [{price: 550}]
                    },  {
                      id: 3, 
                      name: 'Чизбургер пицца', 
                      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                      price: 550, 
                      items: [{price: 550}]
                    }, 
                    {
                     id: 4, 
                     name: 'Чизбургер пицца', 
                     imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                     price: 550, 
                     items: [{price: 550}]
                   }, 
                   {
                    id: 5, 
                    name: 'Чизбургер пицца', 
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                    price: 550, 
                    items: [{price: 550}]
                  }, 
                  {
                   id: 6, 
                   name: 'Чизбургер пицца', 
                   imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', 
                   price: 550, 
                   items: [{price: 550}]
                 }
                    ]}
                />
            </div>
          </div>
        </div>

      </Container>
   </>
  )
  
}
