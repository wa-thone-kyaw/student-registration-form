export const List = () => {
    const items = [
      {id: ('၁'), name: 'Civil(မြို့ပြသင်တန်း)'},
      {id: ('၂'), name: 'Electronics(အီလက်ထရောနစ်)'},
      {id: ('၃'), name: 'Electrical Power(လျှပ်စစ်စွမ်းအား)'},
      {id: ('၄'), name: 'Mechanical(စက်မှုစွမ်းအား)'},
      {id: ('၅'), name: 'Information Technology(သုတနည်းပညာ)'}
    ];
  
    return (
      <>
       
        
        <ol>
         <div> {items.map((item) => <li key ={item.id}>{item.name}</li>)}</div>
          
        </ol>
        
      </>
    );
  }
  export default List;
  
  //const root = ReactDOM.createRoot(document.getElementById('root'));
  //root.render(<List />);