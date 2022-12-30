export default function Divider({ sectionName }) {
  return (
    <div className='text-center'>
      <h2 className='pt-12 text-center  font-work text-4xl uppercase tracking-widest text-[#457A9A]'>
        {sectionName}
      </h2>
      <div className='inline-block w-[100px] rounded-2xl border-2 border-b border-[#457A9A] opacity-25 '></div>
    </div>
  );
}
