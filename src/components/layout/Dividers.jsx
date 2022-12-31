export default function Divider({ sectionName }) {
  return (
    <div className='text-center'>
      <h2 className='pt-12 text-center  font-work text-4xl uppercase tracking-widest text-[#465b69]'>
        {sectionName}
      </h2>
      <div className='inline-block w-[100px] rounded-2xl border-2 border-b border-[#465b69]/80 opacity-25 '></div>
    </div>
  );
}
