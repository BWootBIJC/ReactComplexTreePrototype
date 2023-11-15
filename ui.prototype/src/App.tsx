import './App.css'
import {StaticTreeDataProvider, Tree, TreeItem, UncontrolledTreeEnvironment} from "react-complex-tree";
import 'react-complex-tree/lib/style-modern.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faFolder} from "@fortawesome/free-solid-svg-icons";


function App() {

    const items = {
        root: {
            index: 'root',
            isFolder: true,
            children: ['child1', 'child2'],
            data: 'Root item',
        },
        child1: {
            index: 'child1',
            children: [],
            data: 'Child item 1',
        },
        child2: {
            index: 'child2',
            isFolder: true,
            children: ['child3'],
            data: 'Child item 2',
        },
        child3: {
            index: 'child3',
            children: [],
            data: 'Child item 3',
        },
    };



    return (
        <UncontrolledTreeEnvironment
            canDragAndDrop={true}
            canDropOnFolder={true}
            canReorderItems={true}
            getItemTitle={item => item.data}
            
            viewState={{}}
            canRename={true}
            dataProvider={new StaticTreeDataProvider(items, (item, data) => ({...item, data}))}
        >
            <Tree
                treeId="tree-2"
                rootItem="root"
                treeLabel="Tree Example"
                renderItemArrow={({item}) => {
                    return (
                        <div className={`hover:bg-transparent`}>
                            {
                                item.isFolder ? <FontAwesomeIcon icon={faFolder}/>
                                    :
                                    <FontAwesomeIcon icon={faFile}/>
                            }
                        </div>
                    )
                }}
                renderItemsContainer={({item}) => {
                    return <div className={`hover:bg-transparent`}>
                        
                    </div>
                }}
            />
        </UncontrolledTreeEnvironment>
    );
}

export default App
