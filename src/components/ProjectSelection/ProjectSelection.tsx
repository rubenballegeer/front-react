import React, {useState, useContext, useEffect} from 'react'
import AppContext from '@context'
import {Project} from "@interfaces"
import { getOpenProjects } from '@functions'
import {useQuery} from 'react-query'
import {Loading} from '../UtilComponents'
import CardGrid from './CardGrid'
const ProjectSelection = () => {

    const {isLoading, data: projectData} = useQuery('projects', getOpenProjects)

    return (
        <div>
            {(isLoading) ? (
                <Loading/>
            ) : (
                <>
                {(projectData) ? (
                    <CardGrid projects={projectData}/>
                ) : (
                    <div>
                        <p>No projects found</p>
                    </div>
                )}
                </>
            )}
        </div>
    )
}

export default ProjectSelection