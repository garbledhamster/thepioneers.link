document.addEventListener('DOMContentLoaded',function(){
    fetch('data/cards.json').then(response=>{
        if(!response.ok){throw new Error('Network response was not ok '+response.statusText);}
        return response.json();
    }).then(data=>{
        const contentArea=document.getElementById('content-area');
        document.title=data.title;
        data.sections.forEach(section=>{
            const sectionHeading=document.createElement('h2');
            sectionHeading.classList.add('mb-4','mt-5');
            sectionHeading.textContent=section.heading;
            contentArea.appendChild(sectionHeading);
            section.categories.forEach(cat=>{
                const categoryContainer=document.createElement('div');
                categoryContainer.classList.add('category-container');
                const catHeading=document.createElement('h3');
                catHeading.textContent=cat.title;
                categoryContainer.appendChild(catHeading);
                cat.entries.forEach(entry=>{
                    const cardGrid=document.createElement('div');
                    cardGrid.classList.add('card-grid');
                    const img=document.createElement('img');
                    img.src=entry.image||'https://picsum.photos/80/80?random=10';
                    img.alt=entry.name;
                    cardGrid.appendChild(img);
                    const cardDetails=document.createElement('div');
                    cardDetails.classList.add('card-details');
                    const nameEl=document.createElement('h3');
                    nameEl.textContent=entry.name;
                    cardDetails.appendChild(nameEl);
                    const desc=document.createElement('p');
                    desc.textContent=entry.description;
                    cardDetails.appendChild(desc);
                    const fameEl=document.createElement('div');
                    fameEl.classList.add('ranking');
                    fameEl.textContent='Fame: '+entry.fame;
                    cardDetails.appendChild(fameEl);
                    const influenceEl=document.createElement('div');
                    influenceEl.classList.add('influence');
                    influenceEl.textContent='Influence: '+entry.influence;
                    cardDetails.appendChild(influenceEl);
                    const connectionsEl=document.createElement('div');
                    connectionsEl.classList.add('connections');
                    connectionsEl.textContent='Connections: '+entry.connections;
                    cardDetails.appendChild(connectionsEl);
                    const tagsEl=document.createElement('div');
                    tagsEl.classList.add('tags');
                    tagsEl.textContent='Tags: '+entry.tags.join(', ');
                    cardDetails.appendChild(tagsEl);
                    const buttonsDiv=document.createElement('div');
                    buttonsDiv.classList.add('buttons');
                    entry.links.forEach(link=>{
                        const a=document.createElement('a');
                        a.href=link.url;
                        a.textContent=link.text;
                        a.target="_blank";
                        buttonsDiv.appendChild(a);
                    });
                    cardDetails.appendChild(buttonsDiv);
                    cardGrid.appendChild(cardDetails);
                    categoryContainer.appendChild(cardGrid);
                });
                contentArea.appendChild(categoryContainer);
            });
        });
    }).catch(error=>console.error('Error loading data:',error));
});
