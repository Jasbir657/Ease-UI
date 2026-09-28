import ComponentDemo from '../ComponentsDemo';
import PropsTable from '@/components/Personal/PropsTable';
import { Tooltipcompo } from '@/components/Tooltip/Tooltipcompo';
import { Button } from '@/components';

const Tooltip = () => {

let basicUsageCode = `
import { Tooltipcompo } from '@/components/Tooltip/Tooltipcompo';

 <Tooltipcompo text = "Primary" position = "bottom" varient= "primary" size= "full">Primary </Tooltipcompo>
 <Tooltipcompo text = "Dark" position = "top" varient= "dark" size= "lg">Dark </Tooltipcompo>
 <Tooltipcompo text = "Success" position = "right" varient= "success" size= "xl">Success </Tooltipcompo>

`

const propsData = [
  {
    prop : "Positions",
    type : "Top | Bottom | Left | Right",
    default : "top",
    description: "The Postions of the Tooltip",
  },{
    prop : "Varient",
    type : "Primary | Dark | Success | Destructive",
    default : "Primary",
    description : "These are of different colors for different usecase"
  },{
    prop : "Size",
    type :"defult | sm | xl | lg | full | auto ",
    default:" default",
    description : " These are the Different Sizes",
  }
   
]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          A tooltip is a small message that appears when you hover over an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>

        <div className='flex gap-4 flex-wrap'>
          <Tooltipcompo 
         text = "Primary"
         position = "bottom"
         varient= "primary"
         size= "full"
         >
          <Button
              variant="primary"
              hoverAnimation="jiggle"
              size="sm"> Primary </Button>
        </Tooltipcompo>

        <Tooltipcompo
         text='This is Dark'
         position="right"
         varient= "dark"
         size= "lg"  >
          <Button 
            variant="dark"
            hoverAnimation="bounce"
            size="lg"
          >Dark
          </Button>
        </Tooltipcompo>
        <Tooltipcompo
         text = "This is Success"
         position = "left"
         varient="success">
          <Button 
              variant="secondary"
              hoverAnimation="bounce"
              size="lg"
              > Success
              </Button>
        </Tooltipcompo>
        <Tooltipcompo
         text = "This is destructive"
         position = "top"
         varient= "destructive">
          <Button 
              animation="fadeIn"
              variant="destructive"
              hoverAnimation="scale"
              size="xl"
          >Destructive</Button>
        </Tooltipcompo>

        </div>
        </ComponentDemo>
  
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default Tooltip