

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"
import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/productList";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({isFeatured: true});
  const billboard = await getBillboard("e8eca7b9-0b2e-45c4-8ac1-ee8d062c9a80")

  return (


     <Container>
      <div className="space-y-10 pb-10">
       <Billboard data={billboard}/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
       <ProductList  title="Featured Products" items={products}/>
       </div>
      </div>
    </Container>
  )
}



export default HomePage




//     <Container>
//     <div className="space-y-10 pb-10">
//       {/* Billboard Section */}
//       <div className="">
//         <Billboard data={billboard} />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         {/* Billboard Content */}
//       </div>
      
//       {/* Featured Products Section */}
//       <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
//         <ProductList title="Featured Products" items={products} />
//       </div>
//     </div>
//   </Container>
// );
// };
